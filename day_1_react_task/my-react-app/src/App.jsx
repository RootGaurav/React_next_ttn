import Greeting from "../components/Greeting.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";  

const element=<h1>Hello world</h1>
function App() {
  return (
    <div>
      <Header />
      <div>
        {element}
        <Greeting name="Gaurav" />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
