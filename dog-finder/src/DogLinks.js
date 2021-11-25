import { NavLink } from 'react-router-dom';

const DogLinks = (props) => {
  return (
    <nav>
      {
        props.dogs.map(dog => {
          return <NavLink key={dog.src} to={dog.src}>{dog.name}</NavLink>
        })
      }
    </nav>
  )
}

export default DogLinks