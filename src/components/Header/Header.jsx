import imga from '../../assets/react-core-concepts.png';
import './Header.css'

const reactions = ["Aliaa Core","Gazab Cruucial","Hard hai bhai Funda"]

function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header() {

  const naam = reactions[getRandomInt(2)];
  return (
    <header>
      <img src={imga} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {naam} React concepts you will need for almost any app you are
        going to build!!!!! What!!!
      </p>
    </header>
  );
};