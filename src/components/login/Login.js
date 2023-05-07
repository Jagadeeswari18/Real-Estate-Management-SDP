import axios from 'axios';
import { useState } from 'react';
import React from "react"
import { Link } from 'react-router-dom';
import Home from '../home/Home';

function Login({store}){

  const [un, setUn] = useState(null);
  const [pw, setPw] = useState(null);
  const [login, setLogin] = useState(null);
  const [checked, setChecked] = useState(false);

  function handleForm(event) {
    alert("Successfully Loggedin!!");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUn(data.get("un"));
    setPw(data.get("pw"));
    console.log(un+"---"+pw)//+ symbol for conatenating strings
    axios.get('http://localhost:8082/check',{
      params: {
        un: un,
        pw: pw
      }
    }).then((res)=>{
         console.log(res.data)
         setLogin(res.data)
    })
  }

  function handleCheckbox() {
    setChecked(!checked);
  }

  function handleLogout() {
    setLogin(null);
  }

  const css = `
    .App-login {
      min-height: 0vh;
      display: flex;
      min-width: 50px;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: rgb(16, 227, 243);
    }

    .login {
      background-color: #ece5e5;
      padding: 20px;
      min-width: 200px;
      min-height: 150px;
      display: flexbox;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: rgb(3, 81, 123);
      
    }

    .box {
      display: center;
      flex-direction: column;
    
    }

    .box label {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .box input {
      padding: 0px;
     
      border: none;
      font-size: 16px;
    }

    .register-link {
      margin-top: 10px;
      font-size: 14px;
    }
  `;

  if (login === null || login === 'FAIL') {
    return (
      <div className='App-login'>
        <style>{css}</style>
        <form onSubmit={handleForm}>
          <div className="login">
            <div className="box">
              <label>Username:</label>
              <input type="text" name="un" />
            </div>
            <div className="box">
              <label>Password:</label>
              <input type="password" name="pw" />
            </div>
            <div className="box">
              <label>
                <input type="checkbox" checked={checked} onChange={handleCheckbox} />
                      I am not a robot
              </label>
            </div>
            <div className="box">
              <input type="submit" value="Login" disabled={!checked} />
            </div>
            <div className="box register-link">
              If new user ? <Link to="/registration"><b> Register here</b></Link>
            </div>
          </div>
          <div className="box register-link">
              If admin ? <Link to="/AdminPanel"><b> Click here</b></Link>
            </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
        <Home/>
      </div>
    );

  }
}

export default Login;
