import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector,  } from "./atoms";

function App() {

  return (
    <>
      <RecoilRoot>
        <h1>Hello world</h1>
        <MainApp/>
      </RecoilRoot>
    </>
  );
}
function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const totalNotificationSelectorCont = useRecoilValue(totalNotificationSelector)

  return <div>
    <button>Home</button>
        <button>My Network {networkNotificationCount>99 ? "99+":networkNotificationCount}</button>
        <button>Jobs ({jobAtomCount})</button>
        <button>Messaging({messagingAtomCount})</button>
        <button>Notifications({notificationsAtomCount})</button>
        <button>Me ({totalNotificationSelectorCont})</button>
  </div>
}

export default App;
