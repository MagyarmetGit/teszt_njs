import './App.css';
import React, {useState} from 'react'
import axios from 'axios'
function App() {
  const [ip, setIP] = useState("nem ismert")
  const log = async ()=>{
    const myIp = await axios.get("https://api.ipify.org?format=json")
    setIP(myIp.data.ip)
  }
  
  return (
    <div className="App">
      <button onClick={log}>ip</button>
      <p>{ip}</p>
    </div>
  );
}

export default App;
