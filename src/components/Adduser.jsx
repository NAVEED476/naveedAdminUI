import * as React from 'react';
import { Button, Stack, TextField, Typography } from "@mui/material"
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

const Adduser = () => {
    const [name,setname] = useState("");
    const [user,setuser] = useState("");
    const [email,setemail] = useState("");
    const [number,setnumber] = useState("");

    const navigate = useNavigate();
    const handleback =() =>{
        navigate("/")
    }

    const handleSubmit = () =>{
        console.log(name,email,number)
        setname("");
        setemail("");
        setnumber("");
        setuser("");
        const data = {name,user,email,number}

        fetch(`http://localhost:3000/users`, {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((r)=>r.json()).then((d)=>console.log(data))
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
                }}>Add User Details here</Typography>
                <TextField sx={{marginTop:"10px"}} placeholder="enter name" label="name" type="text" 
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                />
                <TextField sx={{marginTop:"10px"}} placeholder="enter username" label="user name" type="text"
                value={user}
                onChange={(e)=>{setuser(e.target.value)}}
                />
                <TextField sx={{marginTop:"10px"}} placeholder="enter email" label="email" type="email"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
                />
                <TextField sx={{marginTop:"10px"}} placeholder="enter number" label="number" type="number"
                value={number}
                onChange={(e)=>{setnumber(e.target.value)}}
                />
                <Button sx={{
                    marginTop:"10px",
                     color:"priimary",
                     width:"100px",
                     marginLeft:"200px",
                     }}
                onClick={handleSubmit}
                disabled={!name || !email || !number || !user}
                >Submit</Button>
                <Button
                 sx={{
                    marginTop:"10px",
                     color:"priimary",
                     width:"100px",
                     marginLeft:"200px",
                     }}
                 onClick={
                    handleback
                }>Home</Button>
            </Stack>
        </>
    )
}

export default Adduser
