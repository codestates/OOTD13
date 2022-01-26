import React, { useState, useEffect } from 'react';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordModal from "./components/PasswordModal";
import PostModal from "./components/PostModal";
import Withdrawal from "./components/Withdrawal";
import Main from "./components/Main"
import logo from "./images/ootd13Logo.png";
import Footer from "./components/Footer"
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import viewOptions from './viewsOption';
// import dotenv from 'dotenv'
// dotenv.config()


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
  font-size: 18px;
  `
;

const WriteButton = styled(Button)`
  width: 150px;
  justify-self: flex-end;
  align-self: center;
  background-color: rosybrown;
  `
;

const SelectButton = styled(Button)`
  width: 150px;
  `
;

const A = styled.a`
  width: 150px;
  background-color: red;
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
  background-color: orange;
`;
const MainTag = styled.div`
  display: flex;
  height: 5%;
  width: 100%;  
  margin-left: 30px;
  background-color: paleturquoise;
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

const Username = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: #7AD7F5;
  display: inline-block;
  background-color: rgb(230, 230, 230);
  width: auto;
  padding: 10px;
  border-radius: 6px;
  /* display: flex; */
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
  const [userInfo, setUserInfo] = useState({username:"", email:"", createdAt: "", loginMethod: "", password: ""});
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [tagList, setTagList] = useState([]);
  const [queryOptions, setQueryOptions] = useState({order: {}, page: 1, sex: {}, weather: {}, season: {}, style: {}});
  const [isPwModalOpen, setIsPwModalOpen] = useState(false);
  const [isWdModalOpen, setIsWdModalOpen] = useState(false);
  const [postList, setPostList] = useState([]);
  const GITHUB_ID = "24bfea583d4a595757ef";
  const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}`;
  
  useEffect(()=> {
    renderMain();
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  },[userInfo, isLogin, queryOptions, tagList])

  const renderMain = () => {
    console.log("Object.values(queryOptions) ===", Object.values(queryOptions));
    const {order, page, sex, weather, season, style}= queryOptions;
    console.log("{order, page, sex, weather, season, style} =====", {order, page, sex, weather, season, style});
    console.log("Object.values(page) ====", Object.keys(page));
    axios({
      url: "http://localhost:5000/main",
      method: "get",
      params: {
        order: String(Object.keys(order)) || "", 
        page: page || 1, 
        sex: Number(Object.keys(sex)) || "",  
        weather: Number(Object.keys(weather)) || "",   
        season: Number(Object.keys(season)) || "",  
        style: Number(Object.keys(style)) || ""
      }
    }).then((res) => {
      const renderPost = res.data.data.post;
      setPostList(renderPost);
    })
    .catch((err) => console.log(err))
  }
  const resetUserInfo = () => {
    setUserInfo({username: "", email: "", createdAt: "", loginMethod: "", password: ""});
    accessLogin.removeItem('key');
  }
  
  const accessLogin = () => {
    setIsLogin(!isLogin);
  }
  const getAccessToken = (authorizationCode) => {
    axios({
      url: 'http://localhost:5000/user/login/github',
      method: 'post',
      data: {
        authorizationCode
      }
    })
      .then((res) => {
        const token = res.data.data.accessToken;
        const info = res.data.data.userInfo;
        changeAccessToken(token); // token 업데이트
        changeUserInfo(info); //userInfo 업데이트
        accessLogin(); // Login 처리
      })
      .catch((err) => console.log(err));
    
    // this.setState({
    //     isLogin: true,
    //     accessToken: resp.data.accessToken
    // })
  }
  
  const deleteTags = () => {
    setQueryOptions({order: {}, page: 1, sex: {}, weather: {}, season: {}, style: {}});
    setTagList([]);
  }

  const addTag = (event) => {
    event.preventDefault();
    const index = event.nativeEvent.target.selectedIndex; // value index
    const subject = event.currentTarget.name; // 쿼리 subject key
    const value = event.target.value // 쿼리에 들어갈 값
    const text = event.nativeEvent.target[index].text; // 화면에 뿌려줄 text
    const object = JSON.parse(JSON.stringify(queryOptions));
    if(Object.keys(object[subject]).length > 0) {
      object[subject] = {}; 
      object[subject][value] = text;
    } else {
      object[subject][value] = text;
    }
    
    setQueryOptions(object);

    //taglist가 아닌 queryOptions로 태그를 만든다.
    // 어떻게? queryOptions를 돌면서 값이 ""이 아닌 경우 그 해당 키와 subject값으로 viewsOption에서

    setTagList([...tagList, text]);
  }

  const openPwModal = () => {
    // e.stopPropagation();
    if(userInfo.loginMethod === 1) {
      alert("SNS계정 회원은 비밀번호를 변경할 수 없습니다.");
      return;
    }
    setIsPwModalOpen(!isPwModalOpen);
  }

  const openWdModal = () => {
    // e.stopPropagation();
    setIsWdModalOpen(!isWdModalOpen);
  }

  const clickToLogout = () => {
    const {loginMethod}= userInfo;

    if(!isLogin) {
      window.location.href = "http://localhost:3000"
    }

    axios({
      url: `http://localhost:5000/user/logout?loginmethod=${loginMethod}`,
      method: 'get',
      headers: {authorization: accessToken},
    })
    .then((res) => {
      alert("정상적으로 로그아웃되었습니다.");
      resetUserInfo();
    })
    .catch((err) => {
      alert("비정상적인 시도입니다.");
      resetUserInfo();
    }
      );
  }

  const changeUserInfo = (info) => {
    setUserInfo(info);
  }
  const changeAccessToken = (token) => {
    setAccessToken(token);
  }
  
  const clickToWrite = () => {
    if(!userInfo.isLogin) {
      window.location.href="http://localhost:3000/login"
    }
      window.location.href="http://localhost:3000/login"
  }

  const reDirectToGithub = () => {
    window.location.assign(GITHUB_URL);
  }

  return (
    <Router>
        <Switch>
          <Route path="/" exact={true}></Route>
          <Route path="/login"><Login reDirectToGithub={reDirectToGithub} accessLogin={accessLogin} changeUserInfo={changeUserInfo} changeAccessToken={changeAccessToken} accessToken={accessToken} userInfo={userInfo}/></Route>
          <Route path="/signup"><Signup reDirectToGithub={reDirectToGithub}/></Route>
          <Route path="/post"><PostModal/></Route>
      </Switch>
      <Container>
          {!isPwModalOpen 
          ? null
          : <PasswordModal email={userInfo.email} password={userInfo.password} openPwModal={openPwModal} accessToken={accessToken}></PasswordModal>
          }
          {!isWdModalOpen
          ? null
          : <Withdrawal resetUserInfo={resetUserInfo} email={userInfo.email} accessToken={accessToken} loginMethod={userInfo.loginMethod} openWdModal={openWdModal}></Withdrawal>
          }
        <Header>
            <Blank></Blank>
          <LogoDiv>
            <Logo src={logo} />
          </LogoDiv>
          <ButtonDiv>
          {!isLogin
            ? <div>
                <Link to="/login">
                  <Button>로그인</Button>
                </Link>
                <Link to="/signup">
                  <Button>회원가입</Button>
                </Link>
              </div>
          : 
          <div>
          <Username>{userInfo.username}</Username>
          <SelectButton onClick={openPwModal}>비밀번호변경</SelectButton>
          <SelectButton onClick={openWdModal}>회원탈퇴</SelectButton>
          <SelectButton onClick={clickToLogout}>로그아웃</SelectButton>
          </div>
          // <div className="navi-div">
          //     <nav>
          //       <ul className="ul-dept1">
          //         <li className="li-dept1">
          //           <a className="a-dept1">정보수정</a>
          //           <ul className="ul-dept2">
          //             <li className="li-dept2">
          //               <a className="a-dept2" onClick={openPwModal}>비밀번호변경</a>
          //             </li>
          //             <li className="li-dept2">
          //               <a className="a-dept2"onClick={openWdModal}>회원탈퇴</a>
          //             </li>
          //           </ul>
          //         </li>
          //       </ul>
          //     </nav>
            // <SelectButton onClick={clickToLogout}>로그아웃</SelectButton>
            // </div>  
          } 
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
                  <option key={key} value={key}>{val}</option>
                  )
                })
              }
              </Select>
            )})
            }
          </MainSelect>
          <WriteButton onClick={clickToWrite}>글쓰기</WriteButton>
        </MainTop>
        <MainTag>
        {/* {tagList.length <= 1 
          ? null
          : tagList.map((tag) => {
            return (
              <Tag key={tag}>{tag}</Tag>
            )
          })} */}
        {Object.keys(queryOptions).map((option)=> {
          console.log("key ===", Object.values(queryOptions[option]).filter((val) => val !== ""))
          if(option === 'page') return;
          return Object.values(queryOptions[option]).map((value) => {
            if(value === "") return;
            return (
            <Tag key={value}>{value}</Tag>
            )
          })
          })
        }  
          {tagList.length <= 1
          ? null
          : <Cancel type="button" onClick={deleteTags}>초기화</Cancel>
        }

        </MainTag>
        <MainDiv>
          {postList.map((post) => 
          {
            return (
            <Main 
              key={post.postId}
              postId={post.postId}
              username={post.username} 
              imgSrc={post.imageSrc} 
              like={post.like} 
              view={post.view}
              tag={post.tag}></Main>
            )
          })}
        </MainDiv>
        </Body>
        <Line></Line>
        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default App;