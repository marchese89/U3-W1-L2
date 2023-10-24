import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import books from "./books/horror.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks genre={books} />
      <MyFooter />
    </>
  );
}

export default App;
