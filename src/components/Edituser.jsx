import * as React from 'react';
import { Button, Stack, TextField, Typography } from "@mui/material"
import {useNavigate} from "react-router-dom"
import { useState } from 'react';

const Edituser = () => {
  const navigate = useNavigate();
  const[name,setname] = useState("");
  const [user,setuser] = useState("");
  const [email,setemail] = useState("");
  const [number,setnumber] = useState("");

  

  function handleSubmit(){
    console.log("hello this is naveed")
  }
  return (
    <>

       <Stack sx={{
                width: "300px",
                margin: "auto",

            }}>
                <Typography sx={{
                    margin: "100px 0px 50px 0px",
                    fontWeight: "bold",
                    fontSize: "25px",
                    fontFamily: "Lato"
                }}>Edit User Details here...!</Typography>
                <TextField sx={{marginTop:"10px"}}
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                placeholder="name"
                />
                <TextField sx={{marginTop:"10px"}}
                placeholder="username"
                value={user}
                onChange={(e)=>setuser(e.target.value)}
                />
                <TextField sx={{marginTop:"10px"}}
                placeholder="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                />
                <TextField sx={{marginTop:"10px"}}
                placeholder="number"
                value={number}
                onChange={(e)=>setnumber(e.target.value)}
                />
                <Button sx={{
                    marginTop:"10px",
                     color:"priimary",
                     width:"100px",
                     marginLeft:"200px",
                     }}
                     onClick={handleSubmit}
                    >Submit</Button>
                <Button sx={{
                    marginTop:"10px",
                     color:"priimary",
                     width:"100px",
                     marginLeft:"200px",
                     }}

                     onClick={()=>navigate("/")}
                     >Home</Button>
            </Stack>
    </>
  )
}

export default Edituser
