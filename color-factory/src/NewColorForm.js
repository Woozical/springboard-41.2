import { useState } from "react";

const DEFAULT_STATE = {color:"#000000", name:"New Color"};  

const NewColorForm = (props) => {
  const [formData, setFormData] = useState(DEFAULT_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.submitCallback(formData);
    setFormData(DEFAULT_STATE);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const updated = {...formData, [name] : value };
    setFormData(updated);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="c-color">Color: </label>
      <input onChange={handleChange} name="color" id="c-color" type="color" value={formData.color} />
      <label htmlFor="n-color">Color Name: </label>
      <input onChange={handleChange} name="name" id="n-color" type="text" value={formData.name} />
      <button>Add Color</button>
    </form>
  )
}

export default NewColorForm;