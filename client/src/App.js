import React, { useState, useEffect } from 'react';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordModal from "./pages/PasswordModal";
import Post from "./pages/Post";
import Withdrawal from "./pages/Withdrawal";
import Main from "./components/Main"
import logo from "./images/ootd13Logo.png";
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import viewOptions from './viewsOption';

const Container = styled.div` 
  width: max(700px, auto);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 150px;
  `
;

const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.05);
  margin: 0 150px;
  padding: 0 0;
  `
;

const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #36C5F0;
  border: 1px solid #00bcf5;
  color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 4px;
  font-weight: 500;
  margin-left: 10px;
  font-size: 16px;
  `
;

const WriteButton = styled(Button)`
  width: 150px;
  justify-self: flex-end;
  align-self: center;
  background-color: rosybrown;
  `
;

const selectButton = styled(Button)`
  width: 150px;
  `
;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
  height: 100%;
  `
;

const Blank = styled.div`
  height: 100%;
  width: 33%;
  justify-self: center;
  margin-right: 20px;
  `
;

const LogoDiv = styled(Blank)`
  height: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 100%;
  `
;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
  `
;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 100%;
`;

const Line = styled.hr`
  color: black;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1;
  height: 1;
  width: 100%;
`
const Select = styled.select`
  width: 120px;
  height: 50px;
  margin: 0 15px;
  display: inline-block;
  box-sizing: border-box;
  /* padding-left: 5px; */
  border-radius: 6px;
  border: none;
  background-color: #DEDEDE;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  color: rgb(50,50,50);
`

const MainSelect = styled.div`
  /* align-self: center; */
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
`;
const MainTag = styled.div`
  display: flex;
  height: 5%;
  width: 100%;  
  margin-left: 30px;
`;

const Tag = styled.span`
  width: min(80px, 150px);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  margin: 0 8px 8px 0;
  font-size: 18px;
  font-weight: 500;
  list-style: none;
  border-radius: 6px;
  font-weight: 800;
  background-color: #7AD7F5;
`

const Cancel = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100px;
  height: 30px;
  border-radius: 6px;
  background-color: white;
  color: #7AD7F5;
  font-size: 18px;
  font-weight: 800;
  border: 0;
  outline: 0;
`
const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 10px 10px;
  background-color: beige;
  height: 85%;
  width: 100%;  
`;





function App() {
  const [userInfo, setUserInfo] = useState({isLogin: false, accessToken: "",})
  const [tagList, setTagList] = useState([]);

  useEffect(()=> {
    // console.log(tagList);
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode)
    }
  },)
  
  const getAccessToken = (authorizationCode) => {
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
  
  const deleteTags = () => {
    setTagList([]);
  }

  const addTag = (event) => {
    event.preventDefault();
    setTagList([...tagList, event.target.value]);
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
            <Blank></Blank>
          <LogoDiv>
            <Logo src={logo} />
          </LogoDiv>
          <ButtonDiv>
            <Link to="/login">
              <Button>로그인</Button>
            </Link>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
            {/* <Link to="/post">
              <selectButton>정보수정</selectButton>
            </Link>
            <Link to="/post">
              <Button>게시물</Button>
            </Link>
            <Link to="/passwordmodal">
              <selectButton>비밀번호변경</selectButton>
            </Link>
            <Link to="/withdrawal">
              <selectButton>회원탈퇴</selectButton>
            </Link> */}
          </ButtonDiv>
        </Header>
        <Line></Line>
        <Body>
        <MainTop>
          <MainSelect>
            {viewOptions.map((view)=> {
              return (
              <Select key={view.subject} onChange={addTag} name={view.subject}>
                <option selected disabled>{view.subjectName}</option>
                {Object.keys(view.options).map((key) => {
                  const val = view.options[key];
                  return (
                  <option key={key} value={val}>{val}</option>
                  )
                })
              }
              </Select>
            )
            })}
          </MainSelect>
          <WriteButton>글쓰기</WriteButton>
        </MainTop>
        <MainTag>
        {tagList.length <= 1 
          ? null
          : tagList.map((tag) => {
            return (
              <Tag key={tag}>{tag}</Tag>
            )
          })}
          {tagList.length <= 1
          ? null
          : <Cancel type="button" onClick={deleteTags}>초기화</Cancel>
          }
        </MainTag>
        <MainDiv>
          <Main></Main>
          <Main></Main>
          <Main></Main>
          <Main></Main>
          <Main></Main>
          <Main></Main>
        </MainDiv>
        </Body>
        <Line></Line>
        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default App;