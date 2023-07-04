import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [isAuth, setIsAuth] = useState(false); // 初期値としてfalseを設定する
  const navigate = useNavigate();
  const logout = () => {
    // ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false); // setIsAuthを使用して認証状態を変更する
      navigate("/login");
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
