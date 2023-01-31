
import './App.scss'
import { Navbar,Home,SignIn,Commerce,CreateListing } from "./components";
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
function App() {
  return (
    <div className="">
    
      <BrowserRouter>
      <Navbar/>  
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<SignIn/>}/>
        <Route path='/commerce' exact element={<Commerce/>}/>
        <Route path='/create' exact element={<CreateListing/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Navbar/>
      <Home/> */}
    </div>
  );
}

export default App;
