import { ChildToParent } from "./Components/ChildToParent";
import { ParentToChild } from "./Components/ParentToChild";
import { Siblings } from "./Components/Siblings";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>State uplifting</h1>
      <ParentToChild />
      <ChildToParent />
      <Siblings />
    </div>
  );
}
