import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}
// eslint-disable-next-line react/prop-types
function Todo({ id }) {
  const currentTodo = useRecoilValue(todoAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  );
}

export default App;
