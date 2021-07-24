import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@material-ui/core'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import DetailView from './components/post/DetailView';

 
function App() {
  return (
    <BrowserRouter>
     <Header />
     <Box style={{marginTop: 64}}>
<Switch>
     <Route exact path='/' component={ Home }/>
     <Route exact path='/details' component= {DetailView} />
</Switch>
 </Box>
     
</BrowserRouter>
  );
}

export default App;
