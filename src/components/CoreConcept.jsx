import CoreConcepts from "./CoreConcepts"
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcept(){
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title}{...conceptItem}/>))}
          {/* <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
        </ul>
        </section>
    )
}