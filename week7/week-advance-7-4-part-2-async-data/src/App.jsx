import { useEffect, useState } from "react";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {  totalNotificationSelector,  } from "./atoms";
import { notifications } from "./atoms";
import axios from 'axios'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  );
}
function MainApp() {
  const [networkCount,setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

useEffect(() => {
  //fetch
  // axios.get("https://sum-server.100xdevs.com/notifications")
  // .then(res=>setNetworkCount(res.data))
  
}, [])

  return <div>
    <button>Home</button>
        <button>My Network ({networkCount.network>99 ? "99+":networkCount.network})</button>
        <button>Jobs ({networkCount.jobs})</button>
        <button>Messaging({networkCount.messaging})</button>
        <button>Notifications({networkCount.notifications})</button>
        <button>Me ({totalNotificationCount})</button>
  </div>
}

export default App;
