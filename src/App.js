import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@material-ui/core'
 
function App() {
  return (
    <>
     <Header />
     <Box style={{marginTop: 64}}>
     <Home />
     </Box>
     
</>
  );
}

export default App;
