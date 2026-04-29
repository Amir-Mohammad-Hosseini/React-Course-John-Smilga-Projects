import { useState } from "react";
import PROFILES from "./data.js"
import List from "./components/List.jsx";
const App = () => {
  const [people , setPeople] = useState(PROFILES)
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])} type="button" className="btn btn-block">Clear all</button>
    </section>
  </main>
};
export default App;
