import logo from './logo.svg';
import './App.css';
// import './components/Project_2_Accordian/index.jsx'
// import './components/Project_1_BasicCalculator/index.jsx'
import Calculator from './components/Project_1_BasicCalculator/index.jsx';
import Accordian from './components/Project_2_Accordian/index.jsx';
function App() {
  return (
    <div className="App">
  
        {/* {<Calculator />} */}

        {<Accordian />}

    </div>
  );
}

export default App;
