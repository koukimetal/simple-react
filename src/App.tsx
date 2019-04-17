import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import * as Cookies from "js-cookie";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [password, updatePassword] = useState("");

  const tryLogin = () => {
    if (password === "pass") {
      setLoggedIn(true);
      console.log(document.cookie);
      Cookies.set('loggedin', '1');
    }
  }

  useEffect(() => {
    if (Cookies.get('loggedin') === "1") {
      setLoggedIn(true); 
    }
  }, []);

  return (
    <>
      {loggedIn && <>
        <Typography variant="h5" component="h2" id="data">
          Important Data
        </Typography>
      </>}
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
                <Button variant="contained" onClick={tryLogin}>
        Login
      </Button>
    </>
  );
}

export default App;
