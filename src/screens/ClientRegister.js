import React, { Component, useState } from 'react';
import { withStyles } from "@mui/styles";
import { Box, Button, Divider, TextField, Typography, Snackbar, Alert, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import image from "./../assets/theme2.jpg";
import Grid from '@mui/joy/Grid';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as moment from 'moment';
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@material-ui/core/styles"

var dateVariable = new Date();

const styles1 = createTheme({
  notchedOutline: {
    borderWidth: "5px",
    borderColor: "white !important"
  }
});

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
      padding: "100px",
      // textAlign: "center",#dfd4e5
      backgroundImage: `url(${image})` ,
     // backgroundColor: "#372a3d",
      minHeight: "96.7vh",
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
      //  background: " #fbf2ff",
        borderRadius: "10px",
        //borderColor: "white !important",
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

  function ClientRegister(props) {
  const { classes } = props;
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [password, setPassword] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClickShowPassword = () => {
    setPassword(!password);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className={classes.root}>           
        <div className=" textCenter">
         <Typography style={{ margin: "150px 22px 22px", color: "white" }} variant="h5">
           Client Registration
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
           id="name"
           label="Name"
           placeholder=" "
           variant="outlined"          
          // onChange={(e) => { handleChange(e) }}
          onChange={(e)=>{}}
          color="primary" focused
          inputProps={{ style: { color: "white", borderColor:"white"} }}
         />
         <br/>
         <br/>
         <TextField
           fullWidth
           id="address"
           label="Address"
           placeholder=" "
           variant="outlined"          
          // onChange={(e) => { handleChange(e) }}
          onChange={(e)=>{}}
          color="primary" focused
          inputProps={{ style: { color: "white" } }}
         />
         <br/>
         <br/>
       {/*  <LocalizationProvider dateAdapter={AdapterDayjs}>
        
      <DemoContainer
        components={[
          'MobileDatePicker',
        ]}
      > 
        <DatePicker
          label="Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        </DemoContainer>
        
    </LocalizationProvider>
    <br/>
      <br/>*/}
    <TextField 
    fullWidth
    type="date"
    label="Date"
    color="primary" focused
    variant="outlined"
   // defaultValue={moment().format("yyyy-mm-dd")}  
    onChange={(e) => (`${e.target.value}`) }
    InputProps={{inputProps: { min: "1970-01-01", max: "2025-05-04", style: { color: "white" }} 
    }}
/>
<br/>
         <br/>
         <TextField
           fullWidth
           id="changepertruck"
           label="Change Per Truck"
           placeholder=" "
           variant="outlined"          
          // onChange={(e) => { handleChange(e) }}
          onChange={(e)=>{}}
          color="primary" focused
          inputProps={{ style: { color: "white" } }}
         />
         <br/>
         <br/>
         </Box>
         <Grid container spacing={2}>
         <Button variant="outlined" className={classes.loginBtn} onClick={() => { }}
            sx={{
                background: "#372a3d",
                borderRadius: "5px",
                width: "20%",
              }}>
           Save
         </Button>&emsp;
         <Button variant="outlined" className={classes.loginBtn} onClick={() => { }} 
         sx={{
            background: "#372a3d",
            borderRadius: "5px",
            width: "20%",
          }}>
           Update
         </Button>&emsp;
         <Button variant="outlined" className={classes.loginBtn} onClick={() => { }} 
         sx={{
            background: "#372a3d",
            borderRadius: "5px",
            width: "20%",
          }}>
           Delete
         </Button>&emsp;
         <Button variant="outlined" className={classes.loginBtn} onClick={() => { }} 
         sx={{
            background: "#372a3d",
            borderRadius: "5px",
            width: "20%",
          }}>
           Reset
         </Button>
         </Grid>
      </div>
    )
  }
  export default(withStyles(styles)(ClientRegister));