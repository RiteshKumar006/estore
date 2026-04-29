import TopNav from './component/TopNav/TopNav';
import CatNav from './component/CatNav/CatNav'
import MainComponent from './component/MainComponent';
import './App.css';

function App() {
  return (
    <div className="App"> 
     <TopNav /> 
     <CatNav />
     <MainComponent />
    </div>
  );
}

export default App;
