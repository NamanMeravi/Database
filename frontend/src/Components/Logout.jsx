import React from 'react'
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
const Logout = () => {

    const [authUser,setauthUser] = useAuth()
    console.log(authUser);
    const handlelogout = ()=>{
        try {
          
            setauthUser({
                ...authUser,
               user: null
            })
            localStorage.removeItem("User");
            toast.success("Logout Successfully")
            window.location.reload();
        } catch (error) {
            toast.error('Error',error.message)
        }
    }
  return (
    <div>
      <button onClick={handlelogout} className='px-3 py-2 text-white bg-red-500 rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout
