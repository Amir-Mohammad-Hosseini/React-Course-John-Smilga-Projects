import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState([]);

  const handleSubmitColor = (colorValue) => {
    try {
      const enteredColorShapes = new Values(colorValue).all(10); // 10 : increment color-weight percent
      setColors(enteredColorShapes);
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form onSubmitColor={handleSubmitColor} />
      <ColorList colors={colors} />
      <ToastContainer />
    </main>
  );
};
export default App;
