import { Box, Button } from "@mui/material"
import logo from "../assets/logo.png"
import { colors, remValues } from "../constants/Constants"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"


export const Layout = () => {
    return (
        <>
            <Box sx={{backgroundColor:colors.primarycolor, height:"100vh", overflowY:"auto"}}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{ backgroundColor:"#C0DEFC", p: 2 }}>
                    <Box>
                        <img src={logo} width="35%" alt="" />
                    </Box>

                    <Box >
                        <Button style={{backgroundColor:colors.buttoncolor, color:"white", padding:"8px 25px"}}>Login</Button>
                    </Box>
                </Box>

                <Box display={"flex"}>
                    <Sidebar/>

                    <Box sx={{width:"100%", overflowY:"hidden"}}>
                        <Outlet/>
                    </Box>
                </Box>

            </Box>
        </>
    )
}