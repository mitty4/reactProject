import Google from './Components/Google'
import Instagram from './Components/Instagram'
import Snake from 'react-simple-snake'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Google />
        <Instagram />
        <div style={{minHeight:"100vh", display:"flex", justifyContent:"center"}}>
        <Snake />
        </div>

      </header>
    </div>
  );
}

export default App;
