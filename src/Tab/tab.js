import React from "react";
import { Typography, Box, List } from "@mui/material"
const Tab = () => {
    return (
        <>
            <Typography sx={{ fontSize: "30px", color: "darkblue", fontWeight: "bold", marginTop: "30px", marginLeft: "100px" }}>Host an Opportunity</Typography>
            <Typography sx={{ color: "darkblue", marginLeft: "100px" }}>Choose your Opportunity Category from below</Typography>
            <Box
                sx={{ height: "300px", width: "1400px", backgroundColor: "darkblue", margin: "10px", marginTop: "50px", marginLeft: "100px", borderRadius: "20px", }}>
                <Typography sx={{ color: "white", fontSize: "20px", padding: "20px", display: "flex", fontWeight: "bold" }}>For
                    <Typography sx={{
                        color: "blue", paddingBottom: "10px", fontSize: "20px", wordSpacing: "30px", paddingLeft: "10px", paddingRight
                            : "10px"
                    }}>Engaging</Typography>
                    your target audience </Typography>
                <List sx={{ display: "flex", marginTop: "-15px", padding: "5px" }}>
                    <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y1.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
                    <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y2.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
                    <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y3.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
                    <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y4.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
                </List>
                <List sx={{ display: "flex", padding: "5px" }}>
                    <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y5.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
                    <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y6.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
                    <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y7.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
                </List>
            </Box>
            <Box sx={{width:"1400px",height:"200px",backgroundColor:"skyblue",marginTop:"50px",marginLeft:"100px",borderRadius:"20px"}}>
                <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",padding:"20px",display:"flex"}}>For<Typography sx={{color:"darkred",fontWeight:"bold",fontSize:"20px",paddingLeft:"5px",paddingRight:"5px",wordSpacing:"300px"}}>Hiring</Typography>  the right talent</Typography>
            <List sx={{display:"flex"}}>
            <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y8.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
            <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y9.png"
                        style={{ width: "270px", height: "100px" }} /></Box>
            <Box sx={{ backgroundColor: "white", width: "310px", height: "100px", marginLeft: "20px", borderRadius: "10px", paddingLeft: "10px" }}><img src="y10.png"
                        style={{ width: "270px", height: "90px",paddingTop:"7px" }} /></Box>
            </List>
            </Box>
        </>
    )
}
export default Tab;