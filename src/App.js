import React, { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  //  console.log(userName)
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "userName",
      errorMessage:"user name should be 3-16 character and shouldn't include any special character" ,
      label: "userName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:'It should be a valid email address',
      label: "Email",
      required:true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage:'',
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:' Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character ',
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "ConfirmPassword",
      errorMessage:"Passwords don't match",
      label: "ConfirmPassword",
      pattern: values.password,
      required:true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  // const testObj = {
  //   car: 'hatchback',
  //   model: 'polo',
  //   company: ' Wolkswegan'
  // }
  // console.log(Object.keys(testObj)); 
  // console.log(Object.values(testObj));


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
