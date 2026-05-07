import { useState } from "react";
const Form = ({onSubmitColor}) => {
  const [color, setColor] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitColor(color)
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          placeholder="#f15025"
        />
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
