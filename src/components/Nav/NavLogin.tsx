import React, { useState } from 'react';

// const handleInputvalue = () => (e) => {
//   console.log(e.target.value);
// };

function NavLogin() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <div>로그인</div>
      <div>이메일로 로그인 </div>
      <input
        className="inputId"
        type="text"
        value={inputValue}
        placeholder="이메일을 입력하세요"
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      {/* <button onClick={() => handleLogin()}>로그인</button> */}
    </div>
  );
}

export default NavLogin;
