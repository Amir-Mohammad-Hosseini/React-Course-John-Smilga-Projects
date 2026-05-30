import Title from './components/Title';
import SetupOne from "./examples/1-first-request"
import SetupTwo from "./examples/2-headers"
import SetupThree from "./examples/3-post-request"
import SetupFour from "./examples/4-global-instance"
import SetupFive from "./examples/5-custom-instance"
import SetupSix from "./examples/6-interceptors"

import "./axios/global"
function App() {
  return (
    <main>
      <Title />
      <SetupOne/>
      <SetupTwo />
      <SetupThree />
      <SetupFour />
      <SetupFive />
      <SetupSix />
    </main>
  );
}

export default App;
