import React, { useState } from 'react';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordModal from "./pages/PasswordModal";
import Post from "./pages/Post";
import Withdrawal from "./pages/Withdrawal";
import Root from "./pages/Root";
import logo from "./images/ootd13Logo.png";
import Main from "./pages/Main"
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

function App() {
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
          <Main />
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