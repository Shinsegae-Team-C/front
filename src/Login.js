import { useNavigate } from "react-router-dom";
import * as React from "react";

function Login() {
  let navigate = useNavigate();
  function toJoin() {
    navigate("/join");
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
        ID :<input type="text"></input>
        <br />
        PWD : <input type="password"></input>
        <br />
        <button type="submit">로그인</button>
      </form>
      <button onClick={toJoin}>회원가입하기</button>
    </div>
  );
}

export default Login;
