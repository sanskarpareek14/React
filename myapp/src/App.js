import Description from './Components/Description'
import DescriptionTwo from './Components/DescriptionTwo'
const App = () => {
  console.log(Description)
  return (
    <div>
      <Description private={false} />
      {/* <DescriptionTwo /> */}
    </div >
  );
}



export default App;