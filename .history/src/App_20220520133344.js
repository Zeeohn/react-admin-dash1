import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import MainDash from "./components/MainDash/MainDash.jsx";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <div></div>
      </div>
    </div>
  );
}

export default App;
