import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [paragraphsCount, setParagraphsCount] = useState(1);
  const [paragraphText, setParagraphText] = useState([]);

  const handleSumbit = (event) => {
    event.preventDefault();
    setParagraphText(data.slice(0, paragraphsCount));
  };
  return (
    <section className="section-center">
      <h4>tired ob boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSumbit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={8}
          step={1}
          value={paragraphsCount}
          onChange={(event) => setParagraphsCount(event.target.value)}
        />
        <button className="btn" type="sumbit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphText.map((item) => (
          <p key={nanoid()}>{item}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
