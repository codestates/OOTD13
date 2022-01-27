import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordModal from "./components/PasswordModal";
import PostModal from "./components/PostModal";
import Withdrawal from "./components/Withdrawal";
import Main from "./components/Main";
import logo from "./images/ootd13Logo.png";
import Footer from "./components/Footer";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import viewOptions from "./viewsOption";
import noImage from "./images/loading.png";
import NewPost from "./pages/NewPost";

const Container = styled.div`
  width: max(700px, auto);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* margin: 0 150px; */
  background-color: burlywood;
  background-color: rgba(100, 100, 100, 0.001);
`;
const Header = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.05);
  padding: 0 0;
`;
const Button = styled.button`
  width: 120px;
  height: 50px;
  background-color: #36c5f0;
  border: 1px solid #00bcf5;
  color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 4px;
  font-weight: 500;
  margin-left: 10px;
  font-size: 18px;
`;
const WriteButton = styled(Button)`
  width: 200px;
  height: 60px;
  justify-self: flex-end;
  align-self: center;
  background-color: rosybrown;
  margin-right: 30px;
`;
const SelectButton = styled(Button)`
  width: 150px;
`;
const A = styled.a`
  width: 150px;
  background-color: red;
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
const LogoDiv = styled(Blank)`
  height: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 100%;
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
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
  margin: 0 0;
  padding: 0 0;
`;
const Select = styled.select`
  width: 100px;
  height: 50px;
  margin: 0 15px;
  display: inline-block;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 6px;
  border: none;
  background-color: #c8c8c8;
  height: 50px;
  font-size: 19px;
  font-weight: 700;
  color: rgb(60, 60, 60);
  cursor: pointer;
  &:hover {
    background-color: (20, 20, 20);
  }
`;

const MainSelect = styled.div`
  /* align-self: center; */
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  /* background-color: orange; */
`;
const MainTag = styled.div`
  display: flex;
  height: 5%;
  width: 100%;
  margin-left: 30px;
  /* background-color: paleturquoise; */
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
  background-color: #7ad7f5;
`;

const Cancel = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100px;
  height: 30px;
  border-radius: 6px;
  background-color: white;
  color: #7ad7f5;
  font-size: 18px;
  font-weight: 800;
  border: 0;
  outline: 0;
`;

const Username = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: #7ad7f5;
  display: inline-block;
  background-color: rgb(230, 230, 230);
  width: auto;
  padding: 10px;
  border-radius: 6px;
  /* display: flex; */
`;
// const MainDiv = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-content: center;
//   margin: 10px 10px;
//   /* background-color: beige; */
//   height: 85%;
//   width: 100%;
// `;

const MainDiv = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  align-content: center;
  margin: 10px 10px;
  /* background-color: beige; */
  height: 85%;
  width: 100%;
  gap: 10px 20px;
  /* grid-auto-flow: dense; */
`;

const NoPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  align-items: center;
`;

function App() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    createdAt: "",
    loginMethod: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [tagList, setTagList] = useState([]);
  const [queryOptions, setQueryOptions] = useState({
    order: {},
    page: 1,
    sex: {},
    weather: {},
    season: {},
    style: {},
  });
  const [isPwModalOpen, setIsPwModalOpen] = useState(false);
  const [isWdModalOpen, setIsWdModalOpen] = useState(false);
  const [postList, setPostList] = useState([]);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const GITHUB_ID = "24bfea583d4a595757ef";
  const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}`;

  useEffect(() => {
    setIsLoading(true);
    renderMain();
    setIsLoading(false);
    // console.log("selectedPost ========", selectedPost)
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, [userInfo, isLogin, queryOptions, tagList]);

  useEffect(() => {
    // console.log("selectedPost====", selectedPost);
    openPostModal();
  }, [selectedPost]);

  useEffect(() => {
    const tmp = localStorage.getItem("key");

    if (!tmp) return;
    usernameHandler()
    setIsLogin(true);
    setAccessToken(tmp);
  });
  const usernameHandler = () => {
    const localUsername = localStorage.getItem("username")
    if(userInfo.username === ""){
      userInfo.username = localUsername
    } return;
  }

  const renderMain = () => {
    const { order, page, sex, weather, season, style } = queryOptions;
    axios({
      url: "http://localhost:5000/main",
      method: "get",
      params: {
        order: String(Object.keys(order)) || "",
        page: page || 1,
        sex: Number(Object.keys(sex)) || "",
        weather: Number(Object.keys(weather)) || "",
        season: Number(Object.keys(season)) || "",
        style: Number(Object.keys(style)) || "",
      },
    })
      .then((res) => {
        const renderPost = res.data.data.post;
        setPostList(renderPost);
      })
      .catch((err) => console.log(err));
  };
  const resetUserInfo = () => {
    setUserInfo({
      username: "",
      email: "",
      createdAt: "",
      loginMethod: "",
      password: "",
    });
    setIsLogin(false);
    localStorage.removeItem("key");
  };

  const accessLogin = () => {
    setIsLogin(!isLogin);
  };
  const getAccessToken = (authorizationCode) => {
    axios({
      url: "http://localhost:5000/user/login/github",
      method: "post",
      data: {
        authorizationCode,
      },
    })
      .then((res) => {
        const token = res.data.data.accessToken;
        const info = res.data.data.userInfo;
        changeAccessToken(token); // token 업데이트
        changeUserInfo(info); //userInfo 업데이트
        accessLogin(); // Login 처리
      })
      .catch((err) => console.log(err));
  };

  const selectPost = (postId) => {
    const getPost = postList.filter((post) => post.postId === postId);
    // console.log("selectPost 시작~!");
    // console.log("getPost===", getPost);
    setSelectedPost(getPost);
  };
  const deleteTags = () => {
    setQueryOptions({
      order: {},
      page: 1,
      sex: {},
      weather: {},
      season: {},
      style: {},
    });
    setTagList([]);
  };

  const addTag = (event) => {
    event.preventDefault();
    const index = event.nativeEvent.target.selectedIndex; // value index
    const subject = event.currentTarget.name; // 쿼리 subject key
    const value = event.target.value; // 쿼리에 들어갈 값
    const text = event.nativeEvent.target[index].text; // 화면에 뿌려줄 text
    const object = JSON.parse(JSON.stringify(queryOptions));
    if (Object.keys(object[subject]).length > 0) {
      object[subject] = {};
      object[subject][value] = text;
    } else {
      object[subject][value] = text;
    }

    setQueryOptions(object);

    //taglist가 아닌 queryOptions로 태그를 만든다.
    // 어떻게? queryOptions를 돌면서 값이 ""이 아닌 경우 그 해당 키와 subject값으로 viewsOption에서

    setTagList([...tagList, text]);
  };

  const openPwModal = () => {
    // e.stopPropagation();
    if (userInfo.loginMethod === 1) {
      alert("SNS계정 회원은 비밀번호를 변경할 수 없습니다.");
      return;
    }
    setIsPwModalOpen(!isPwModalOpen);
  };

  const openWdModal = () => {
    setIsWdModalOpen(!isWdModalOpen);
  };

  const clickToLogout = () => {
    let { loginMethod } = userInfo;
    if (!loginMethod) loginMethod = localStorage.getItem("user");
    if (!loginMethod) return;
    loginMethod = loginMethod.toString();

    if (!isLogin) {
      window.location.href = "http://localhost:3000";
    }
    if (!isLogin) return;

    axios({
      url: `http://localhost:5000/user/logout?loginmethod=${loginMethod}`,
      method: "get",
      headers: { authorization: accessToken },
    })
      .then((res) => {
        alert("정상적으로 로그아웃되었습니다.");
        resetUserInfo();
      })
      .catch((err) => {
        alert("비정상적인 시도입니다. (Logout)");
        resetUserInfo();
      });
    localStorage.removeItem("key");
    localStorage.removeItem("user");
  };

  const changeUserInfo = (info) => {
    setUserInfo(info);
  };
  const changeAccessToken = (token) => {
    setAccessToken(token);
  };

  const reDirectToGithub = () => {
    window.location.assign(GITHUB_URL);
  };
  const openPostModal = () => {
    setIsPostModalOpen(!isPostModalOpen);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Container>
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
            {!isPostModalOpen ||
            Object.keys(selectedPost).length === 0 ? null : (
              <PostModal
                openPostModal={openPostModal}
                selectedPost={selectedPost}
              />
            )}
            <Header>
              <Blank></Blank>
              <LogoDiv>
                <Logo src={logo} />
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
            <Body>
              <MainTop>
                <MainSelect>
                  {viewOptions.map((view) => {
                    return (
                      <Select
                        key={view.subject}
                        onChange={addTag}
                        name={view.subject}
                      >
                        <option selected disabled>
                          {view.subjectName}
                        </option>
                        {Object.keys(view.options).map((key) => {
                          const val = view.options[key];
                          return (
                            <option key={key} value={key}>
                              {val}
                            </option>
                          );
                        })}
                      </Select>
                    );
                  })}
                </MainSelect>
                <Link to={isLogin ? "/newpost" : "/login"}>
                  <WriteButton>글쓰기</WriteButton>
                </Link>
              </MainTop>
              <MainTag>
                {Object.keys(queryOptions).map((option) => {
                  if (option === "page") return;
                  return Object.values(queryOptions[option]).map((value) => {
                    if (value === "") return;
                    return <Tag key={value}>{value}</Tag>;
                  });
                })}
                {tagList.length <= 1 ? null : (
                  <Cancel type="button" onClick={deleteTags}>
                    초기화
                  </Cancel>
                )}
              </MainTag>
              {postList.length === 0 ? (
                <NoPost>
                  <img src={noImage} width="300px" height="300px"></img>
                  <span>찾으시는 결과가 없습니다.ㅠㅠ </span>
                </NoPost>
              ) : (
                <MainDiv>
                  {postList.map((post) => {
                    return (
                      <Main
                        key={post.postId}
                        postId={post.postId}
                        imgSrc={post.imageSrc}
                        like={post.like}
                        view={post.view}
                        selectPost={selectPost}
                      ></Main>
                    );
                  })}
                </MainDiv>
              )}
            </Body>
            <Footer></Footer>
          </Container>
        </Route>
        <Route exact path="/login">
          <Login
            reDirectToGithub={reDirectToGithub}
            accessLogin={accessLogin}
            changeUserInfo={changeUserInfo}
            changeAccessToken={changeAccessToken}
            accessToken={accessToken}
            userInfo={userInfo}
          />
        </Route>
        <Route exact path="/signup">
          <Signup reDirectToGithub={reDirectToGithub} />
        </Route>
        <Route exact path="/newpost">
          <NewPost userInfo={userInfo} accessToken={accessToken} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
