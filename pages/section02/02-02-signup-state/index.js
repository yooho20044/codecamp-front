import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  function onChangeEmail(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function onChangePw(event) {
    console.log(event.target.value);
    setPw(event.target.value);
  }

  function onClickSignup() {
    //1. 검증하기
    if (email.includes("@") === false) {
      setError("이메일이 올바르지 않습니다!!");
    } else {
      //2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉, API)
      // => 나중에
      //3. 성공 알람 보여주기
      setError("");
      alert("회원가입을 축하합니다!!");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{error}</div>
      비밀번호: <input type="password" onChange={onChangePw} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
