import Header from "./components/Header";
import Footer from "./components/Footer";
import Lorem from "./components/Lorem";

function App() {
  return (
    <>
      <Header>Hello React!</Header>
      <div>Main content</div>
      <Lorem>Lorem 1</Lorem>
      <Lorem>Lorem 2</Lorem>
      <Lorem>Lorem 3</Lorem>
      <Footer />
    </>
  );
}

export default App;
