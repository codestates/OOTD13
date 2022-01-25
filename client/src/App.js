import React, { useState, useEffect } from 'react';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordModal from "./pages/PasswordModal";
import Post from "./pages/Post";
import Withdrawal from "./pages/Withdrawal";
import Root from "./pages/Root";
import logo from "./images/ootd13Logo.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  LoginButton,
  SignupButton,
  Footer,
  FooterContainer,
  FooterInput,
  Body
} from "./App.style.js";
import axios from 'axios';

function App() {
  const [userInfo, setUserInfo] = useState({isLogin: false, accessToken: "",})
  
  useEffect(()=> {
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code');
    console.log(authorizationCode);
    if (authorizationCode) {
      getAccessToken(authorizationCode)
    }
  })
  
  const getAccessToken = (authorizationCode) => {
    // 받아온 authorization code로 다시 OAuth App에 요청해서 access token을 받을 수 있습니다.
    // access token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있습니다.
    // authorization code를 서버로 보내주고 서버에서 access token 요청을 하는 것이 적절합니다.
    
    // await axios.post("http://localhost:4000/callback", {authorizationCode: authorizationCode})
    //   .then(res => this.setState({isLogin: true, accessToken: res.data.accessToken}))
    //   .catch((err) => console.log(err));
    axios({
      url: 'http://localhost:5000/user/login/github',
      method: 'post',
      data: {
        authorizationCode
      }
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    
    // this.setState({
    //     isLogin: true,
    //     accessToken: resp.data.accessToken
    // })
  }

  return (
    <Router>
        <Routes>
          <Route path="/" exact={true} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
          <Route path="/passwordmodal" element={<PasswordModal/>}></Route>
          <Route path="/withdrawal" element={<Withdrawal/>}></Route>
      </Routes>
      <Container>
        <Header>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <div>
            <Link to="/login">
              <LoginButton>로그인</LoginButton>
            </Link>
            <Link to="/signup">
              <SignupButton>회원가입</SignupButton>
            </Link>
            <Link to="/post">
              <SignupButton>게시물</SignupButton>
            </Link>
            <Link to="/passwordmodal">
              <SignupButton>비밀번호변경</SignupButton>
            </Link>
            <Link to="/withdrawal">
              <SignupButton>회원탈퇴</SignupButton>
            </Link>
          </div>
        </Header>
        <Body>
          바디입니다.
        </Body>
        <FooterContainer>
          <div></div>
        </FooterContainer>
        <Footer>
          <FooterInput>
            내용기입
          </FooterInput>
        </Footer>
      </Container>
    </Router>
  );
}

export default App;