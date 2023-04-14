import React from 'react'
import SidebarContainer from '../../../components/SidebarContainer/SidebarContainer'
import SidebarContent from '../../../components/SidebarContainer/SidebarContent'
import SidebarHeader from '../../../components/SidebarContainer/SidebarHeader'

const Room = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <span className='font-bold'>Room</span>
      </SidebarHeader>  
      <SidebarContent>
        room members...
      </SidebarContent>
    </SidebarContainer>
  )
}

export default Room