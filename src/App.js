import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import MainDash from "./components/MainDash/MainDash.jsx";
import RightSide from "./components/RightSide/RightSide.jsx";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
