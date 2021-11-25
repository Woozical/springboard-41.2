import { useParams, Navigate } from "react-router";

const DogPage = (props) => {
  const { src } = useParams();
  const data = props.dogs.find(dog => dog.src === src);

  if (!data) return <Navigate to="/dogs" />

  return (<div>
    <h1>{data.name}</h1>
    <p>Age: {data.age}</p>
    <ul>
      {data.facts.map( (text, i) => {
        return <li key={i}>{text}</li>
      })}
    </ul>
  </div>)
}

export default DogPage;