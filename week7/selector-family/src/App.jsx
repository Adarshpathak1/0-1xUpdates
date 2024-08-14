import { RecoilRoot, useRecoilValueLoadable } from "recoil";
import "./App.css";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}
function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  // { its provide two things.
  //   contents
  //   state
  //   error
  // }

  if (todo.state === "loading") {
    return <div>loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        <p>{todo.contents.title}</p>
        <p>{todo.contents.description}</p>
        <br />
      </>
    );
  } else if (todo.state === "hasError") {
    return <div>error white getting data!</div>;
  }
}

export default App;
