import { useState } from "react"
import api from "../../api/api"

export default function Login(){
       const [email,setemail] = useState('');
       const [load,setload] = useState(false);
       const [otp,setotp] = useState('')
       const [otp_send,setotp_send] = useState(false)
       const [error,seterror] = useState('')

       const submit = async (e) => {
              e.preventDefault()
              try{
              const response = await api.post('/auth/login/',{email});
              if (response.data['success']){
                            setotp_send(true)
              }
              else{
                     seterror("something is wrong")
              }
              
              }
              catch(e){
                     seterror(e.response?.data?.error)
              }
       }

       return (
              <>
                     <div className="left">
                            <h1>Abel.s Portfolio Login Page</h1>
                     </div>
                     <form action="" onSubmit={submit}>
                            <label htmlFor="">Email</label>
                            <input type="text" onChange={(e) => setemail(e.target.value)}/>
                            <button type="submit" className="bg-blue-500">Send Otp</button>
                     </form>
              </>
       )
}