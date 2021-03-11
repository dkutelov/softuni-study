import style from "./App.module.css";
import Header from "./components/header";
import Main from "./components/main";
import Menu from "./components/menu";

import "./App.scss";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default App;
