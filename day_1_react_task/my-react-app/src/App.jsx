import Greeting from "../components/Greeting.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";  

function App() {
  return (
    <div>
      <Header />
      <div>
        <Greeting name="Gaurav" />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
