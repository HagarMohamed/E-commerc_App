import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import registerAction from '../../Redux/actions/registerAction';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import notify from '../useNotifacation';

const RegisterHook = () => {

    const dispatch = useDispatch();
    const response = useSelector(state => state.allRegisterData.user)
    


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onChangeName = (e) =>{
        setName(e.target.value)
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const onChangePhone = (e) =>{
        setPhone(e.target.value)
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value)
    }

    const validate = () =>{
        if(name === ""){
            notify("enter the name", "error")
            return
        }
        if(email === ""){
            notify("enter the email", "error")
            return
        }
        if(phone.length <= 10){
            notify("enter the valid number", "error")
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
        await dispatch(registerAction({name: name, email: email, phone: phone, password: password, 
            passwordConfirm: confirmPassword}))
            
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
    

    return [name, setName, email, setEmail, phone, setPhone, password, setPassword, confirmPassword, 
        setConfirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword,
         onChangeConfirmPassword, onClick]

}


export default RegisterHook
