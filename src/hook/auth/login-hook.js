import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import notify from '../useNotifacation';
import loginAction from '../../Redux/actions/loginAction';

const loginHook = () => {

    const dispatch = useDispatch();
    const response = useSelector(state => state.allLoginData.loginUser)
    


    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    

    const validate = () =>{
        
        if(email === ""){
            notify("enter the email", "error")
            return
        }
        
        if(password != confirmPassword){
            notify("enter the valid password", "error")
            return
        }

    }

    const onClick = async (e) =>{
        validate();
        setLoading(true)
        await dispatch(loginAction({email: email, password: password}))
            
        setLoading(false)
    }

     useEffect(() =>{
        if(loading == false){
            if(response){
                if(response.data.token){
                     localStorage.setItem("token", response.data.token)
                }
                if(response.data.errors){
                   const message = response.data.errors[0].msg
                   toast(message, "error")
                }
    
            }
        }
        

    },[loading])
    

    return [email, setEmail,password, setPassword, loading, onChangeEmail, 
        onChangePassword, onClick]

}


export default loginHook
