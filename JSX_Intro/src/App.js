import './App.css';

let name="Sharmili";
function App() {
  return (
    //This is JSX.
    <>
    <nav className="navbar">
      <li>Home</li>
      <li>About</li>
      <li>Products</li>
    </nav>
    <div className="container">
      <h2>Hello {name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur, neque alias, incidunt mollitia architecto officiis accusamus ab amet, voluptate ea rerum explicabo quam perferendis qui. Earum reprehenderit esse provident.</p>
    </div>
    </>
  );
}

export default App;
