import React, { Component, useState, useRef,useEffect,useContext, State} from 'react';
import AuthContext from '../context/AuthProvider';
import { withStyles } from "@mui/styles";
import { Box, Button, Divider, TextField, Typography, Snackbar, Alert, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import image from "./../assets/theme2.jpg";
import logo from "./../assets/logo-new.png";
import { grey } from '@mui/material/colors';
import { Link, useNavigate, useHistory } from "react-router-dom";
//import axios from '../api/axios';
import axios from 'axios';
import { alignProperty } from '@mui/material/styles/cssUtils';

//const LOGIN_URL = 'https://localhost:44326/api/LoginpageAutherization/login';

const styles = (theme) => ({
  bottom:{
    color: "#fff",
    position: "absolute",
        bottom: 0,
        right: 5,
  },
  palette: {
    primary: {
      light: '#fafafa',
      main: '#f5f5f5',
      dark: '#eeeeee',
      contrastText: '#cebfd6',
    },
  },

    root: {
      padding: "250px",
      // textAlign: "center",#dfd4e5
      backgroundImage: `url(${image})` ,
     // backgroundColor: "#372a3d",
      minHeight: "96.7vh",
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
      //  background: " #fbf2ff",
        borderRadius: "10px",
      },
    },
    logo: {
      height: "200px",
      position: "absolute",
      top: "17px",
      left: 0,
      right: 0,
      margin: "24px auto",
    },
    textCenter: {
      textAlign: "center",
    },
    recover: {
      textAlign: "right",
      color: "#d2c2db",
    },
    register: {
      color: "#fff",
      textAlign: "center",
    },
    loginBtn: {
      textTransform: "capitalize !important",
      background: "#0d47a1 !important",
      color: "#ffffff !important",
      padding: "11px 15px !important",
      borderRadius: "10px !important",
      margin: "20px 0 !important",
    },
  
    divide: {
      position: "relative",
      textAlign: "center",
      margin: "30px 0px",
    },
    divideCnt: {
      position: "absolute",
      top: "-12px",
      maxWidth: "fit-content",
      padding: "0 20px",
      margin: "0 auto",
      left: 0,
      right: 0,
      background: "#372a3d",
      color: "#fff",
    },
    linkRoot: {
      padding: "10px 26px",
      border: "1px solid #fff",
      width: "fit-content",
      borderRadius: "10px",
    },
    linkIcon: {
      height: "32px",
    },
    linkAlign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "50px 0",
    },
  });
  
  function Login(props) {

  const Navigate = useNavigate();
  const { classes } = props;
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
 // const [password, setPassword] = React.useState(false);
  const [loginData, setLoginData] = React.useState({ UserName: '', password: '' });
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value })
  }
  const handleClickShowPassword = () => {
    setPassword(!password);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.103:80/api/LoginpageAutherization/login', {
        UserName,
        password,
      });
      const token = response.data.token;
          //console.log('Login successful', response.data);
          localStorage.setItem('token', token);
         // history.push('/Menu');
       // if(response.data==='valid user')
        //{
          Navigate("/Menu");
        //]=}
    } catch (error) {
            console.error('Login failed', error);
    }
  };

  {/*  const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }*/}


    return (
    
        <div className={classes.root}>
        <div className=" textCenter">
        <img src={logo} className={classes.logo} />
        <div className={classes.bottom}>Powered by © Glitzern Technolgy</div>
        
    {/* <img src={image} className="classes.logo" />
           <img src={soLogoImg} className={classes.logo} />
 
         <Typography style={{ margin: "150px 22px 22px", color: "white" }} variant="h5">
           Welcome back you've been missed!
         </Typography>*/}
       </div>
       <Box
         component="form"
         sx={{
           "& > :not(style)": { m: " 8px 0" },
         }}
         autoComplete="off"
       >
           <TextField
           fullWidth
           id="username"
           label="Username"
           //ref={userRef}
           placeholder=" "
           variant="outlined"          
           onChange={(e) => setUserName(e.target.value)}
         // onChange={(e) => setUser(e.target.value)}
        // onChange={this.onNameChange}
          value={UserName}
          required
          color="primary" focused
         />
         <br/>
         <br/>
         {/* <TextField
           fullWidth
           id="password"
           placeholder="Password"
           type="password"
           variant="outlined"
           onChange={(e) => { handleChange(e) }}
         /> */}
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined" color="primary" focused>
            <InputLabel htmlFor="outlined-adornment-password">
             Password
           </InputLabel> 
           <OutlinedInput
             id="password"
             label="Password"
             placeholder=" "
             type={password ? "text" : "password"}
             //onChange={(e) => setPassword(e.target.value)}
           onChange={(e) => handleChange(e)}
           // onChange={this.onPasswordChange}
            //value={password}
             required
             color="primary" focused
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   color="primary"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                   edge="end"
                 >
                   {password ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
           />
         </FormControl>
         </Box>
       <div className={classes.recover}>
         <Typography variant="caption" onClick={() => {
              // openEditor();
             }}> Forget Password?</Typography>
       </div>
       <br/>
       <div>
         <Button variant="outlined" type="submit" className={classes.loginBtn} onClick={handleLogin} fullWidth>
           Login
         </Button>
       </div>
       <div className={classes.divide}>
         <Divider sx={{ borderColor: "#cebfd6" }}></Divider>
         <div className={classes.divideCnt}>
           <Typography variant="caption">Or continue with</Typography>
         </div>
       </div>
 
       <div className={classes.register}>
         <Typography variant="caption" >
           Not a member?
           <Link  to="/Menu"  style={{ color: "#d2c2db" }}> Register now</Link>
         </Typography>
       </div>
       </div>
    )
            }
      {/* <Snackbar open={error} autoHideDuration={2000} onClose={handleClose}>
         <Alert
           severity="error"
           sx={{ width: "100%" }}
           variant="filled"
         >
                   {errorMessage}
         </Alert>
       </Snackbar>
            <ResetPassword open={open} closeEditor={closeEditor} ></ResetPassword>*/}
     
    
    
  export default(withStyles(styles)(Login));

{/*import React, { Component, useState } from 'react';
import { withStyles } from "@mui/styles";
import { Box, Button, Divider, TextField, Typography, Snackbar, Alert, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import image from "./../assets/theme2.jpg";
import logo from "./../assets/logo-new.png";
import { grey } from '@mui/material/colors';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

const styles = (theme) => ({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#f5f5f5',
      dark: '#eeeeee',
      contrastText: '#cebfd6',
    },
  },

    root: {
      padding: "250px",
      // textAlign: "center",#dfd4e5
      backgroundImage: `url(${image})` ,
     // backgroundColor: "#372a3d",
      minHeight: "96.7vh",
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
      //  background: " #fbf2ff",
        borderRadius: "10px",
      },
    },
    logo: {
      height: "200px",
      position: "absolute",
      top: "17px",
      left: 0,
      right: 0,
      margin: "24px auto",
    },
    textCenter: {
      textAlign: "center",
    },
    recover: {
      textAlign: "right",
      color: "#d2c2db",
    },
    register: {
      color: "#fff",
      textAlign: "center",
    },
    loginBtn: {
      textTransform: "capitalize !important",
      background: "#0d47a1 !important",
      color: "#ffffff !important",
      padding: "11px 15px !important",
      borderRadius: "10px !important",
      margin: "20px 0 !important",
    },
  
    divide: {
      position: "relative",
      textAlign: "center",
      margin: "30px 0px",
    },
    divideCnt: {
      position: "absolute",
      top: "-12px",
      maxWidth: "fit-content",
      padding: "0 20px",
      margin: "0 auto",
      left: 0,
      right: 0,
      background: "#372a3d",
      color: "#fff",
    },
    linkRoot: {
      padding: "10px 26px",
      border: "1px solid #fff",
      width: "fit-content",
      borderRadius: "10px",
    },
    linkIcon: {
      height: "32px",
    },
    linkAlign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "50px 0",
    },
  });
  
  function Login(props) {

  const { classes } = props;
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [password, setPassword] = React.useState(false);
  const [loginData, setLoginData] = React.useState({ UserName: '', password: '' });

  const handleClickShowPassword = () => {
    setPassword(!password);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  {/*const onAuthenticated = (user, token) => {
    return (dispatch) => {
      dispatch({
        type: USER_DETAIL,
        payload: { user, token }
      });
    };
  };

  const login = () => {

  axios.post("https://localhost:44326/api/LoginpageAutherization/login",loginData)
      .then((result) => {
        if()
        Navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message)
        setError(true);
      });
      axios.post('https://localhost:44326/api/LoginpageAutherization/login', {
      UserName    : this.state.UserName,
      password : this.state.password
    })
  .then(user => {
    Navigate("/Menu");
  })

  }


    return (
        <div className={classes.root}>
           
        <div className=" textCenter">
        <img src={logo} className={classes.logo} />
        
    <img src={image} className="classes.logo" />
           <img src={soLogoImg} className={classes.logo} />
 
         <Typography style={{ margin: "150px 22px 22px", color: "white" }} variant="h5">
           Welcome back you've been missed!
         </Typography>
       </div>
       <Box
         component="form"
         sx={{
           "& > :not(style)": { m: " 8px 0" },
         }}
         autoComplete="off"
       >
           <TextField
           fullWidth
           id="username"
           label="Username"
           placeholder=" "
           variant="outlined"          
          // onChange={(e) => { handleChange(e) }}
          onChange={(e)=>{}}
          color="primary" focused
         />
         <br/>
         <br/>
          <TextField
           fullWidth
           id="password"
           placeholder="Password"
           type="password"
           variant="outlined"
           onChange={(e) => { handleChange(e) }}
         /> 
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined" color="primary" focused>
            <InputLabel htmlFor="outlined-adornment-password">
             Password
           </InputLabel> 
           <OutlinedInput
             id="password"
             label="Password"
             placeholder=" "
             type={password ? "text" : "password"}
             onChange={(e)=>{}}
             color="primary" focused
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   color="primary"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                   edge="end"
                 >
                   {password ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
             // label="Password"
           />
         </FormControl>
         </Box>
       <div className={classes.recover}>
         <Typography variant="caption" onClick={() => {
              // openEditor();
             }}> Forget Password?</Typography>
       </div>
       <br/>
       <div>
         <Button variant="outlined" className={classes.loginBtn} onClick={() => {login()}} fullWidth>
           Login
         </Button>
       </div>
       <div className={classes.divide}>
         <Divider sx={{ borderColor: "#cebfd6" }}></Divider>
         <div className={classes.divideCnt}>
           <Typography variant="caption">Or continue with</Typography>
         </div>
       </div>
 
       <div className={classes.register}>
         <Typography variant="caption" >
           Not a member?
           <Link  to="/Menu"  style={{ color: "#d2c2db" }}> Register now</Link>
         </Typography>
       </div>
 
       <Snackbar open={error} autoHideDuration={2000} onClose={handleClose}>
         <Alert
           severity="error"
           sx={{ width: "100%" }}
           variant="filled"
         >
                   {errorMessage}
         </Alert>
       </Snackbar>
            <ResetPassword open={open} closeEditor={closeEditor} ></ResetPassword>
     </div>
    )
  }
export default(withStyles(styles)(Login));*/}