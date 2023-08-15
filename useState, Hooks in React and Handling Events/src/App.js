import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';

function App() {
  return (
    //This is JSX.
    <>
    <Navbar title="TextUtils" aboutT="About Us"/>
    <div className="container my-4">
    <Form heading="Go on! Enter your text here.."/>
    </div>
    </>
  );
}

export default App;
