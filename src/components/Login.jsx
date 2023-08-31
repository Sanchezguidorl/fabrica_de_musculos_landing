import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { login } from "./customHooks";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });
  const [errorsInputs, setErrorsInputs] = useState({
    inputPassword: false,
    inputUser: false,
    validationFail: false,
  });
  const [loginSuccess, setLoginSuccess]= useState(false);

useEffect(()=>{
  if(loginSuccess){
    setErrorsInputs({
      inputPassword: false,
      inputUser: false,
      validationFail: false,
    })
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }
},[loginSuccess])

  const handlePassword = (e) => {
    setFormData((prevdata) => ({
      ...prevdata,
      password: e.target.value,
    }));
  };

  const handleUser = (e) => {
    setFormData((prevdata) => ({
      ...prevdata,
      username: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resetErrors={
      inputPassword: false,
      inputUser: false,
      validationFail: false,
    }
    if (!formData.password && !formData.username) {
      setErrorsInputs({
        ...resetErrors,
        inputPassword: true,
        inputUser: true
      });
      return;
    } else if (!formData.username) {
      setErrorsInputs({ ...resetErrors, inputUser: true });
      return;
    } else if (!formData.password) {
      setErrorsInputs({ ...resetErrors, inputPassword: true });
      return;
    } else {
      try {
        // eslint-disable-next-line no-unused-vars
        const loginUser = await login(formData);
        setLoginSuccess(true);
      } catch (error) {
        setErrorsInputs({ ...resetErrors, validationFail: true });
      }
    }
  };

  return (
    <section id="Login">
      <form action="" onSubmit={handleSubmit} className="form-login">
        <legend>Identificarme</legend>
        <p
          className="error-input"
          style={{
            visibility: errorsInputs.validationFail ? "visible" : "hidden",
          }}
        >
          Los datos ingresados son incorrectos
        </p>
        {
          loginSuccess&&
          <div className="success-login">Datos validados exitosamente</div>
        }
        <label>Usuario</label>
        <input
          type="text"
          onChange={handleUser}
          value={formData.user}
          placeholder="Ingresar usuario administrador"
        />
        <p
          className="error-input"
          style={{ visibility: errorsInputs.inputUser ? "visible" : "hidden" }}
        >
          El campo usuario es obligatorio
        </p>
        <label>Contraseña</label>
        <input
          type="password"
          onChange={handlePassword}
          value={formData.password}
          placeholder="Ingresar contraseña"
        />
        <p
          className="error-input"
          style={{
            visibility: errorsInputs.inputPassword ? "visible" : "hidden",
          }}
        >
          El campo contraseña es obligatorio
        </p>
        <input type="submit" value="ENVIAR" />
      </form>
    </section>
  );
}

export default Login;
