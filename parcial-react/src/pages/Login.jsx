import React, { useEffect, useState} from "react";

export const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Remember, setRemember] = useState("");

  const executeButton = () => {
    console.log("Username:", Username);
    console.log("Password:", Password);
    console.log("Remember state:", Remember)

    setUsername("");
    setPassword("");
    setRemember(false);
  };

  return (

    <div className="h-screen w-screen flex justify-center items-center">
      <div id="balls" className="relative"></div>
        <div id="ball-1" className="absolute h-[330px] w-[330px] bg-[h-[200px] bg-[#40AAFF] rounded-full -top-[100px] -right-[100px]">
        </div>
        <div id="ball-1" className="absolute h-[230px] w-[230px] bg-[h-[200px] bg-[#65BCFF] rounded-full -top-[100px] -left-[20px]"></div>
      <div className="mt-50 flex flex-col items-center">
        <div id="user-img" className="h-[100px] w-[100px] bg-[#40AAFF] flex content-center items-center rounded-full relative">
          <img src="/user.svg" alt="user-img" className="absolute h-[90px] w-[90px] -bottom-2 left-1.5" />
        </div>
        <div id="form" className="content-center flex flex-col items-center mt-10">
          <input type="text" placeholder="Username" className="w-[200px] h-[40px] text-center text-white bg-[#40AAFF] rounded-[10px] font-medium" value={Username}  onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" className="mt-5 w-[200px] h-[40px] text-center  text-white bg-[#40AAFF] rounded-[10px] font-medium" value={Password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="content-center flex flex-row text-blue-600 mt-5">
          <input type="checkbox" id="remember-me" className="h-5 w-5" checked={Remember} onChange={(e) => setRemember(e.target.checked)}/>
            <h1 className="ml-4 font-medium text-[16px]">Remember me</h1>
          </div>
        </div>
        <button onClick={executeButton} className="w-[100px] h-[40px] bg-[#40AAFF] rounded-[10px] text-white font-medium mt-10">Sign in</button>
        <h1 className="text-blue-400 mt-3">Forgot Password?</h1>
        <div className="relative">
          <div className="absolute -bottom-10 w-screen -left-49 h-[20px] bg-[#3FA9FF]"></div>
      </div>
      </div>
    </div>
  );
};
