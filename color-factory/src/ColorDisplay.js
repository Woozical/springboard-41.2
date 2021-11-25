import { NavLink, useParams, Navigate } from "react-router-dom";

const ColorDisplay = (props) => {
  const { urlName } = useParams();
  const colorObj = props.colors.find(c => c.urlName === urlName);
  if (!colorObj) return <Navigate to="/colors" />
  const styles = {
    backgroundColor: colorObj.color,
    color: "white",
    minHeight: "500px",
    minWidth: "500px"
  }
  return(
    <div style={styles}>
      <p>Here is your color called {colorObj.name}. Isn't it great?</p>
      <NavLink to="/colors">Go Back</NavLink>
    </div>
  )
}

export default ColorDisplay;