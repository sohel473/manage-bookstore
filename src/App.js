import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />

        <Main />
      </Provider>
    </div>
  );
}

export default App;
