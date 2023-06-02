
import React, { useState } from "react";
import image from "../image/images.jpg";

interface IState {
  user: {
    email: string;
    password: string;
  };
}

const Login: React.FC  = () => {
      const [state, setState] = useState<IState>({
        user:{
          email:'',
          password:'',
        },
      });
      const [isPassValid , setIsPassValid ]=useState(false)
      const [isEmailValid , setIsEmailValid ]=useState(false)
      const emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      const passwordRegex= /^[a-zA-Z0-9]{6,20}$/

        //handleChange
        const handleChange =(event:React.ChangeEvent<HTMLInputElement>) : void=>{
        setState({
          user:{
            ...state.user,
            [event.target.name]:event.target.value,
          }
        })
        setIsEmailValid(false)
        setIsPassValid(false)
        }

  //form haldling

    const handleSubmit =(event:React.FormEvent<HTMLFormElement>) :void =>{
    event.preventDefault()
    
    // if email and passwor is empty
    if(state?.user?.email==="" && state?.user?.password===""){
      return setIsEmailValid(true), setIsPassValid(true)
    }  

    if(state?.user?.email.match(emailRegex)){
      if(state?.user?.password.match(passwordRegex)){
        alert("login Success")
        console.log(state.user)
        setState({
          user:{
            email:'',
            password:'',
          },
        })
        setIsEmailValid(false)
        setIsPassValid(false)
      }
        else{
          setIsPassValid(true)
        }
    }else{
      setIsEmailValid(true)
    }
   
  }

 

  return (
    <div className="max-w-[1320px] md:py-{200} py-5  flex h-screen  mx-auto sm:flex-row flex-col">
      {/* image section leftside*/}
      <div className="basis-2/4 my-8 px-2 lg:h-screen">
        <img
          src={image}
          alt="defaultimg"
          className="w-full  h-4/5 md:h-3/5 lg:h-4/5 rounded-xl mt-8  "
        />
      </div>

      {/* form content rightSide */}

      <div className="basis-6/12 px-5   md:mt-24  sm:8">
        <p className="text-center  mt-8 text-5xl">
          Welcome <span className="text-sky-500">Back !</span>
        </p>
        <p className=" mt-4 text-center">Glad to see you, again</p>

        <form className="bg-white rounded lg:px-24  pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-6">
           
            <input
              type="email"
              name="email"
              value={state.user.email}
              onChange={handleChange}
              className="hadow appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email"
            />
            {!isEmailValid ? "" : <span className="text-red-700">please enter your valid email</span>} 
          </div>
            
          <div className="mb-7">
            <input
              type="password"
              name="password"
              value={state.user.password}
              onChange={handleChange}
              className="hadow appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Password"
             
            />
            { !isPassValid ? "" : <span className="text-red-700">password should be at least 6 characters</span> } 
            <p className="text-right text-gray-600 mt-2">Forgot Password?</p>
          </div>
          <div className="mb-16 ">
            <button type="submit" className="bg-neutral-950 shadow-lg shadow-gray-600 hover:bg-neutral-900 text-white font-bold w-full py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline">
              LogIn
            </button>
          </div>

          <p className="text-center text-gray-600">
            Don't an account yet? <span className="text-sky-600">Signup</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;