import React, { useEffect, useState} from "react";

export const Login = () => {
     //USESTATE
  const [name, setName] = useState("");

  const executeButton = () => {
    console.log("NAME:", name);
  };

  useEffect(() => {
    console.log("CARGA DE APLICACION");
  }, []);

  useEffect(() => {
    if (name != "") {
      console.log("CAMBIO DE VARIABLE", name);
    }
  }, [name]);

  return (

    <div className="h-screen w-screen flex justify-center items-center">
        <div className="">
            <img src="./user.svg" alt="user-img" />
        </div>
    </div>
  );
};
