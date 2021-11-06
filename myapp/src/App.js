import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import Content from './Components/Content'

const App = () => {

  const chores = ["item 1", "item 2", "item 3", "item 4"]


  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
