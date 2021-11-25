import { NavLink } from "react-router-dom";

const ColorIndex = (props) => {
  return (
    <nav>
      Please select a color.
      <br />
      {props.colors.map((c, i) => {
        <NavLink to={c.urlName} key={i} />
      })}
    </nav>
  )
}

export default ColorIndex;