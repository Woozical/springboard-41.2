import { NavLink } from "react-router-dom";

const ColorIndex = (props) => {
  console.log(props.colors);
  return (
    <div>
      <div>
        Welcome to the color factory
        <br />
        <NavLink to="/colors/new">Add a color</NavLink>
      </div>
      <br />
      <div>
        Please select a color.
        <br />
        <nav style={{display: "flex", flexDirection: "column", margin: "5px"}}>
        {props.colors.map((c, i) => {
          return <NavLink to={c.urlName} key={i}>{c.name}</NavLink>
        })}
        </nav>
      </div>
    </div>
  )
}

export default ColorIndex;