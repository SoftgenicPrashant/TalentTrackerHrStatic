import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SubMenu,
    SidebarContent,

  } from "react-pro-sidebar";
  //import icons from react icons

import {MdWorkOutline} from 'react-icons/md'
  import {FaListAlt, FaUserAlt,FaUserTie} from 'react-icons/fa'
  import {AiFillDashboard} from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
  import 'react-pro-sidebar/dist/css/styles.css';
  import useLocalStorage from 'use-local-storage'
  import './Sidebar.css'
const Sidebar = () => {
  const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);

    //create a custom function that will change menucollapse state from false to true and true to false

  return (
    <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>

          </SidebarHeader>
          <SidebarContent   data-theme={theme}>
            <Menu iconShape="square"  data-theme={theme} >
              <MenuItem active={true} icon={<FaUserAlt />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>
               <Link to='/Profile' >My Profile</Link > 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard/>} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>
               <Link to='/Dashbaord'>Dashboard</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<BsCardChecklist />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>
               <Link to='/jdlist2'>List of JDs</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<MdWorkOutline />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>
               <Link to='/My-Work-Space'>My Workspace</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<FaUserTie />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>
               <Link to='/Mycandidates'>My Candidates</Link> 
              </MenuItem>
             
              <SubMenu title='Reports' active={true} icon={<FaListAlt />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>
              <MenuItem  icon={<FaListAlt />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>               <Link to='/Myoffer'>Offer</Link> </MenuItem>
            <MenuItem active={true} icon={<FaListAlt />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>               <Link to='/MyDashoard'>Dashboard</Link> </MenuItem>
            <MenuItem active={true} icon={<FaListAlt />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}  data-theme={theme}>               <Link to='/HandleByMe'>Handle By Me</Link> </MenuItem>
               
              </SubMenu>
              
            </Menu>
          </SidebarContent>
    
    
        </ProSidebar>
      </div>
    </>
  )
}

export default Sidebar