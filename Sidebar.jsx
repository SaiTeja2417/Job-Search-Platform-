import { useLocation, useNavigate } from "react-router-dom"
import { PathConstants } from "../constants/PathConstants"
import { IconBriefcase, IconLayout2, IconTargetArrow } from "@tabler/icons-react"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"
// import { colors } from "../constants/Constants"
import { SaveAlt, SettingsAccessibility } from "@mui/icons-material"
import { motion } from "framer-motion"

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menulist = [
    { name: "Dashboard", 
      path: PathConstants.DASHBOARD,
      icon: IconLayout2 
    },
    
    { name: "Saved Jobs", 
      path: PathConstants.SAVEDJOBS,
      icon: SaveAlt 
    },

    { name: "Applied Jobs", 
      path: PathConstants.APPLIEDJOBS, 
      icon: IconBriefcase 
    },

    { name: "Career Tracker", 
      path: PathConstants.CAREERTRACKER, 
      icon: IconTargetArrow 
    },

    { name: "Profile", 
      path: PathConstants.PROFILE, 
      icon: SettingsAccessibility 
    },
  ]

  return (
    <Stack sx={{
      height: "125vh",
      width: "325px",
      overflowY: "hidden",
      minWidth: "10rem",
      backgroundColor: "#E7EFF8",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",

      display:{
        xl:"block",
        lg:"block",
        md:"none",
        sm:"none",
        xs:"none"
      }
    }}>
      {menulist.map((value, index) => {
        const isActive = location.pathname === value.path
        const Icon = value.icon

        return (
          <List key={index}>
            <ListItem
              onClick={() => navigate(value.path)}
              sx={{
                position: "relative",
                listStyle: "none",
                borderRadius: "8px",
                overflow: "hidden",
                p: 1,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSidebarItem"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#6366F1",
                    borderRadius: "8px",
                    zIndex: 0,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <ListItemButton sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ minWidth: "35px", color: isActive ? "white" : "#399AFA" }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={value.name}
                  primaryTypographyProps={{
                    sx: { color: isActive ? "white" : "black", transition: "color 0.3s" }
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        )
      })}
    </Stack>
  )
}

export default Sidebar
