import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdmindRouteRedirect({existUser, children}) {
const navigate= useNavigate();

useEffect(()=>{
    if(!existUser){
       navigate('/')
        }
},[existUser])

return children;
}

export default AdmindRouteRedirect
