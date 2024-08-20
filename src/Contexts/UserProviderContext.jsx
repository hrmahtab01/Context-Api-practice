import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProviderContext = ({ children }) => {
  let [name, setname] = useState(false);
  let [email, setemail] = useState("");
  let [password, Setpassword] = useState("");
  let [emailrr, setemailrr] = useState("");
  let [passwordrr, Setpasswordrr] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setname,
        email,
        setemail,
        password,
        Setpassword,
        emailrr,
        setemailrr,
        passwordrr,
        Setpasswordrr,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProviderContext;
