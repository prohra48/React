import {  EXAMPLES } from '../data.js';
import TabButton from '../components/TabButton.jsx'
import {useState , Fragment} from 'react';
import Section from './Section.jsx';
import Tab from './Tab.jsx';
export default function Examples(){

    const [selectedButton,setSelectedButton] = useState();

  function handleSelect(selectedButton){
    setSelectedButton(selectedButton);
    console.log(selectedButton);
  }
  return (
    <Section id="examples" title="Examples">
    <Tab
    buttonContainer = "menu"
    buttons={
    <>
    <TabButton isSelected = {selectedButton === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
    <TabButton isSelected = {selectedButton === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
    <TabButton isSelected = {selectedButton === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
    <TabButton isSelected = {selectedButton === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
     </>}>

      { !selectedButton ? (<p>Please select one of above button</p>) : ( 
        <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedButton].code}
          </code>
        </pre>
        </div>
      )}
  </Tab>
  </Section> );
}