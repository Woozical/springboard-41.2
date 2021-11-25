import { NavLink, useParams } from "react-router-dom";

const ColorDisplay = (props) => {
  const { urlName } = useParams();
  const {color, name} = props.colors.find(c => c.urlName === urlName);
  const styles = {
    backgroundColor: color,
    color: "white",
    minHeight: "500px",
    minWidth: "500px"
  }
  return(
    <div style={styles}>
      <p>Here is your color called {name}. Isn't it great?</p>
      <NavLink to="/colors">Go Back</NavLink>
    </div>
  )
}

export default ColorDisplay;