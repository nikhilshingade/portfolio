import './App.css'
import Homepage from './homapage';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';

const App = () => {  
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Homepage/>}/>
      </Routes>
    </Router>
    
  )
}

export default App