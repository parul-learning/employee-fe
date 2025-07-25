import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Card(props)
{
    const [emailId, setEmailId] = useState("");
    const [userPassword, setUserPassword] =useState("");
    const navigate = useNavigate();

    const performLogin = async (event) =>
    {
        event.preventDefault();
       try
       {
           const response = await fetch('http://localhost:8080/api/parul/employee/login',{
               method: 'POST',
               headers: {
                   'Content-Type':'application/json'
               },
               body: JSON.stringify(
                   {
                       emailId,
                       userPassword
                   }
               )
           });
           if (!response.ok)
           {
               throw  new Error(`Http Error! status : ${response.status} `)
           }
           const data = await response.json();
           console.log(data);
           navigate('/dashboard',{
               state:{
                   employeeId: data.employeeId,
                   firstName: data.firstName,
                   lastName: data.lastName
               }
           });

       }catch (error)
       {
          console.log(error)
       }
    };

    const handleUserNameChange = (e) => {
        setEmailId(e.target.value);
    }

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value);
    }


  return (
          <div className="card">
              <div className="card-title">
                  <h2>{props.title}</h2>
              </div>

              <div className="card-content">
                  <label>Email Id</label><input name="username" type="text"  onChange={(e) => handleUserNameChange(e)}/>
              </div>
              <div className="card-content">
                  <label>Password</label><input name="username" type="password" onChange={(e) => handleUserPasswordChange(e)} />
              </div>
              <div className="card-button-content">
                  <button className="btn btn-success" onClick={performLogin}>Login</button>
              </div>
          </div>
  )
}

export default Card