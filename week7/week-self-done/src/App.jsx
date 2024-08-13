import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selectors/evenSelector";
// import './App.css'
function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      {console.log("count")}
      <CountRerenderer />
      <Buttons />
    </div>
  );
}

function CountRerenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <TwoDivide/>
  </div>;
}
function TwoDivide() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {/*{(count % 2 == 0) ? "IT IS EVEN" : null}*/} {/* normal way*/}
    {isEven ? "IT  IS EVEN": null}
    
    {/* const isEven = useMemo(() => count % 2 ==0, [count])   */} {/*  usememo way , render only when count updated !*/}


  </div>
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount( count=> count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count=> count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}


export default App;
