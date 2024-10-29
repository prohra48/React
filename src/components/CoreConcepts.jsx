export default function CoreConcepts(propsabcd){
    return (
      <li>
        <img src={propsabcd.image} alt={propsabcd.title} />
        <h3>{propsabcd.title}</h3>
        <p>{propsabcd.description}</p>
      </li>
    );
  }