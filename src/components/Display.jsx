import { Button, TextField, Typography } from '@mui/material'
import { Stack, Box } from '@mui/system'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Display = () => {
  const [data, setdata] = useState([])
  const navigate = useNavigate();
  const[name,setname] = useState("");
  const [user,setuser] = useState("");
  const [email,setemail] = useState("");
  const [number,setnumber] = useState("");
  const[editId,setEditId] = useState(null);
  const hadleClick_adduser = () => {
    navigate("/add")
  }


  useEffect(() => {
    getdata()
  }, [])

  function getdata() {
    fetch("http://localhost:3000/users").then((d) => d.json()).then((data) => setdata(data))
    const data1 = [...data]
    console.log(data1.name)
    console.log(data)
  }

  function handleDel(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then((r) => r.json()).then((d) => { getdata() })
  }

function handleEdit(id){

setname(data[id-1].name)
setemail(data[id-1].email)
setnumber(data[id-1].number)
setuser(data[id-1].user)
setEditId(data[id-1].id)



}

function handleUpdate(){
  console.log(name,email,number)
  const editdata = {name,user,email,number,editId}
console.log(editdata)
  fetch(`http://localhost:3000/users/${editId}`,{
    method:"PUT",
    headers:{
      "Accept" : "application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(editdata)
  }).then((r)=>r.json()).then((r1)=>{getdata()})
  setname("");
  setemail("");
  setnumber("");
  setuser("");
}


console.log(editId)
  return (
    <>
      <Stack sx={{ marginTop: "50px" }}>
        <Box sx={{
          display: "flex"
        }}>
          <Typography sx={{
            fontFamily: "Lato",
            fontSize: "24px",
            fontWeight: "bold",
            marginLeft: "200px"
          }}>User Details</Typography>

          <Button sx={{ marginLeft: "300px" }}
            onClick={hadleClick_adduser}
          >Add User</Button>
        </Box>

        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Number</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="right">{row.user}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.number}</TableCell>
                    <TableCell align="right">
                      <Button onClick={()=>
                        handleEdit(row.id)
                      }>Edit</Button>
                      <Button onClick={() => handleDel(row.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box>
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


                     onClick={handleUpdate}
                     
                    >update</Button>
            </Stack>
        </Box>

      </Stack>


    </>
  )
}

export default Display
