
import './App.css';
import Carlist from './components/carlist';
import { AgGridReact } from 'ag-grid-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            My Carshop

          </Typography>

        </Toolbar>  
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
