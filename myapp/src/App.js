const App = () => {

  const city = "Rome"

  let styles
  if (city === 'Paris') {
    styles = {
      width: "400px",
      border: "10px solid red"
    }
  } else {
    styles = {
      width: "400px",
      border: "10px solid orange"
    }
  }
  const handler = () => {
    console.log("I was clicked")
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div class="container">
        <h3>{city}</h3>
        <img src="https://images.unsplash.com/photo-1594621544535-1373ff8388b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" style={styles} alt=""></img>
        <button onDoubleClick={handler}>Click Me</button>
      </div>
      <footer>
        <a href="#">GitHub</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>
      </footer>
    </div>
  );
}

export default App;
