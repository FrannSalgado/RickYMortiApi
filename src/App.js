import logo from "./logo.svg";
import "./App.css";
import getCharacters from "./Components/Hooks/apiRequest";
import Home from "./Components/Pages/Home";
import { DataProvider } from "./Components/context/DataContexts";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
