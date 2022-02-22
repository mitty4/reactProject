import logo from './googleMyPortfolio.svg';
import './Google.css';
import { TextField, Button } from '@mui/material';


function Google() {
  return (
    <div>
      <div className="top">
        <img src={logo} className="App-logo" alt="logo" /><br/>
      </div>
      <div className="middle">
        <TextField
          sx={{width:"45vw",
          minWidth:"400px",
          border:"1px solid #a7a9ac",
          color:"#a7a9ac"
      }}
          id="outlined-basic"
          label="Search Mitchell's portfolio"
          size="small"
          variant="outlined"
          />
      </div>

      <div className="bottom">
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <Button color="primary" style={{margin:"0 15px"}} variant="contained">Search Portfolio</Button>
          <Button style={{margin:"0 15px"}} variant="contained">I'm feeling random</Button>
        </div>
      </div>
    </div>
);
}
  export default Google;
