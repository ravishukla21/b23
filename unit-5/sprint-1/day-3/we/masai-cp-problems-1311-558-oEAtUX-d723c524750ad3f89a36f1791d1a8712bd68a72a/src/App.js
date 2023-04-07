import "./App.css";
import useTimeout from "./hooks/useTimeout";
import useOnlineStatus from "./hooks/useOnlineStatus";

function App() {
  // bring useTimeout hook here
  const { ready } = useTimeout(5000);
  // bring useOnlineStatus hook here
  const isUserOnline = useOnlineStatus()

  console.log(ready, "ready")
  console.log(isUserOnline, "onlineoffline")



  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      <h3>Timeout</h3>
      {/* Show this div if the ready variable is true */}

      {ready ? <div data-testid="timeout-div">After the timeout</div> : null}


      <br />
      <h3>Online Status</h3>
      {isUserOnline === "online" ? <div data-testid="online-status">Online 🟢</div> : <div data-testid="offline-status">Offline 🔴</div>}

      {/*  */}


      {/* If the user's network status is offline, show this div only */}
      {/*     <div data-testid="offline-status">Offline 🔴</div> */}

    </div>
  );
}

export default App;
