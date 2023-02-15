
import './App.scss'
import { Navbar,Home,SignIn,Commerce,CreateListing, More,Chat,Update, SearchPost } from "./components";
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import About from './components/About/About';
import io from 'socket.io-client'

function App() {

  return (
    <div className="">
    
      <BrowserRouter>
      <Navbar/>  
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<SignIn/>}/>
        <Route path='/faculty/:commerce' exact element={<Commerce/>}/>
        <Route path='/faculty/:arts' exact element={<Commerce/>}/>
        <Route path='/faculty/:technology' exact element={<Commerce/>}/>
        <Route path='/faculty/:science' exact element={<Commerce/>}/>
        <Route path='/create' exact element={<CreateListing/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/more' exact element={<More/>}/>
        <Route path='/chat' exact element={<Chat/>}/>
        <Route path='/update' exact element={<Update/>}/>
        <Route path='/searchPost' exact element={<SearchPost/>}/>

      </Routes>
      </BrowserRouter>
      {/* <Navbar/>
      <Home/> */}
    </div>
  );
}

export default App;
