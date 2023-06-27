import "./App.css";
import { DataProvider } from "./context/DataContexts";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
