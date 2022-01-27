import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import logo from "../images/logo.png";
import React from 'react';
import {useState} from 'react';
import PasswordModal from "./PasswordModal";
import Withdrawal from "./Withdrawal";

const Header = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-items: center;
align-items: center;
/* box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.05); */
padding: 0 0;
`;

const Logo = styled.img`
  margin-top: 10px;
  padding: 0;
  width: auto;
  height: auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
  height: 100%;
  margin-right: 30px;
`;

const Blank = styled.div`
height: 100%;
width: 33%;
justify-self: center;
margin-right: 20px;
`;

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  ${Logo} {
    width: 150px;
    height: auto;
    margin: auto;
    padding: auto;
  }
`
const LogoDiv = styled(Blank)`
width: 33%;
height: 100%;
display: flex;
align-content: flex-start;
justify-content: center;
/* background-color: blanchedalmond ; */
`;


const Button = styled.button`
width: 120px;
height: 40px;
border: 1px solid #00bcf5;
background-color: rgba(254, 131, 198, 0.7);
color: #343A40;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
border: none;
border-radius: 6px;
font-weight: 700;
margin-left: 10px;
font-size: 16px;
`;

const Username = styled.span`
width: auto;
height: 50px;
background-color: rgb(52, 58, 64, 0.7);
color: white;
padding: 8px;
border-radius: 6px;
font-weight: 700;
font-size: 18px;
margin: 0 10px;
`;

const SelectButton = styled(Button)`
width: auto;
height: min(40px, auto);
`;

const Line = styled.hr`
  color: black;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1;
  height: 1;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 0;
`;

function Nav({isLogin, accessToken, userInfo, clickToLogout, resetUserInfo, changeAccessToken, usernameHandler, LoginApproval}) {
  const [isPwModalOpen, setIsPwModalOpen] = useState(false);
  const [isWdModalOpen, setIsWdModalOpen] = useState(false);
  const openPwModal = () => {
    console.log("openPwModal 작동!!!");
    if (userInfo.loginMethod === 1) {
      alert("SNS계정 회원은 비밀번호를 변경할 수 없습니다.");
      return;
    }
    setIsPwModalOpen(!isPwModalOpen);
  };

  const openWdModal = () => {
    setIsWdModalOpen(!isWdModalOpen);
  };
  return (
    <>
    {!isPwModalOpen ? null : (
      <PasswordModal
        email={userInfo.email}
        password={userInfo.password}
        openPwModal={openPwModal}
        accessToken={accessToken}
      ></PasswordModal>
    )}
    {!isWdModalOpen ? null : (
      <Withdrawal
        resetUserInfo={resetUserInfo}
        email={userInfo.email}
        accessToken={accessToken}
        loginMethod={userInfo.loginMethod}
        openWdModal={openWdModal}
      ></Withdrawal>
    )}
    <Header>
    <Blank></Blank>
    <LogoDiv>
      <StyledLink to="/">
      <Logo src={logo}/>
      </StyledLink>
      </LogoDiv>
  <ButtonDiv>
    {!isLogin ? (
      <div>
        <Link to="/login">
          <Button>로그인</Button>
        </Link>
          <Link to="/signup"> 
        <Button>회원가입</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Username>{userInfo.username}</Username>
          <SelectButton onClick={openPwModal}>
            비밀번호변경
          </SelectButton>
          <SelectButton onClick={openWdModal}>회원탈퇴</SelectButton>
          <SelectButton onClick={clickToLogout}>
            로그아웃
          </SelectButton>
        </div>
      )}
    </ButtonDiv>
    </Header>
    <Line></Line>
    </>
  )
};
export default Nav;


