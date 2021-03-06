import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostModal from "./components/PostModal";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import viewOptions from './viewsOption';
import noImage from "./images/loading.png"
import NewPost from './pages/NewPost';
import Pagination from './components/Pagination';
import loadingImg from "./images/loading.gif";

const Container = styled.div`
  /* width: max(700px, auto); */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* background-color: burlywood; */
  background-color: rgba(100,100,100,0.001);
  `
;

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

const WriteButton = styled(Button)`
  color: white;
  width: 200px;
  justify-self: flex-end;
  align-self: center;
  background-color: #343A40;
  margin-right: 30px;
`;

const Body = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;  
  /* justify-content: flex-start; */
  /* background-color: violet; */
  `
;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  width: 100%;
  margin-bottom: 10px;
  padding: 0;
  /* background-color: blueviolet; */
`;

const Select = styled.select`
  /* width: 100px; */
  height: 3vh; 
  margin: 0 15px;
  display: inline-block;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 6px;
  border: none;
  background-color: #342B00;
  font-size: 18px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: (20, 20, 20);
  }
`;

const MainSelect = styled.div`
  /* align-self: center; */
  display: flex;
  align-items: center;
  /* height: 100%; */
  width: 100%;
  height: 100%;
  /* background-color: orange; */
`;
const MainTag = styled.div`
  display: flex;
  align-items: center;
  height: 3vh;
  width: 100%;
  margin-left: 30px;
  /* background-color: paleturquoise; */
`;

const Tag = styled.button`
  width: auto;
  height: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 8px;
  margin-right: 8px;
  font-size: 18px;
  font-weight: 500;
  list-style: none;
  border-radius: 10px;
  border: 1px solid gray;
  font-weight: 600;
  background-color: rgb(52, 58, 64, 0.7);
`;

const Cancel = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  /* width: 100px; */
  height: 30px;
  border-radius: 6px;
  color: rgb(52, 58, 64, 0.7);
  font-size: 18px;
  font-weight: 800;
  border: 0;
  outline: 0;
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

const MainDiv = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  align-content: center;
  /* margin: 10px 10px; */
  height: 100%;
  width: 80%;
  /* gap: 10px 20px; */
  /* grid-auto-flow: dense; */
  /* background-color: beige; */
`;

const NoPost = styled.div`
  height: 100%;
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
  const [postList, setPostList] = useState([]);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_ID}`;

  useEffect(() => {
    setIsLoading(true);
    renderMain();
    setIsLoading(false);

    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, [userInfo, isLogin, queryOptions, tagList]);


  useEffect(()=> {
    openPostModal();
  }, [selectedPost]);

  useEffect(() => {
    const tmp = localStorage.getItem("key");
    if (!tmp) return;
    usernameHandler()
    setIsLogin(true);
    setAccessToken(tmp);
  });
  console.log(process.env.REACT_APP_API_URL);

  const usernameHandler = () => {
    const localUsername = localStorage.getItem("username")
    if(userInfo.username === ""){
      userInfo.username = localUsername
    } return;
  }

  const renderMain = () => {
    const { order, page, sex, weather, season, style } = queryOptions;
    axios({
      url: `${process.env.REACT_APP_API_URL}/main`,
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
    window.location.href=process.env.REACT_APP_HOME_URL;
  };

  const accessLogin = () => {
    setIsLogin(!isLogin);
  };

  const LoginApproval = () => {
    setIsLogin(true);
  }

  const getAccessToken = (authorizationCode) => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/user/login/github`,
      method: "post",
      data: {
        authorizationCode,
      },
    })
      .then((res) => {
        const token = res.data.data.accessToken;
        const info = res.data.data.userInfo;
        changeAccessToken(token); // token ????????????
        changeUserInfo(info); //userInfo ????????????
        accessLogin(); // Login ??????
      })
      .catch((err) => console.log(err));
  };

  const selectPost = (postId) => {
    const getPost = postList.filter((post) => post.postId === postId);
    setSelectedPost(getPost);
  };
  const deleteTags = (tag) => {
    let obj = JSON.parse(JSON.stringify(queryOptions));
    if(tag === "all") {
      setQueryOptions({
        order: {},
        page: 1,
        sex: {},
        weather: {},
        season: {},
        style: {},
      });
      setTagList([]);
    } else {
      obj[tag] = {};
      setQueryOptions(obj);
      let arr = tagList.slice();
      arr.pop();
      setTagList(arr);
    }
  };

  const addTag = (event) => {
    event.preventDefault();
    const index = event.nativeEvent.target.selectedIndex; // value index
    const subject = event.currentTarget.name; // ?????? subject key
    const value = event.target.value; // ????????? ????????? ???
    const text = event.nativeEvent.target[index].text; // ????????? ????????? text
    const object = JSON.parse(JSON.stringify(queryOptions));
    if (Object.keys(object[subject]).length > 0) {
      object[subject] = {};
      object[subject][value] = text;
    } else {
      object[subject][value] = text;
    }

    setQueryOptions(object);

    //taglist??? ?????? queryOptions??? ????????? ?????????.
    // ?????????? queryOptions??? ????????? ?????? ""??? ?????? ?????? ??? ?????? ?????? subject????????? viewsOption??????

    setTagList([...tagList, text]);
  };


  const clickToLogout = () => {
    let { loginMethod } = userInfo;
    if (!loginMethod) loginMethod = localStorage.getItem("user");
    if (!loginMethod) return;
    loginMethod = loginMethod.toString();

    if (!isLogin) {
      window.location.href = process.env.REACT_APP_HOME_URL;
    }
    if (!isLogin) return;

    axios({
      url: `${process.env.REACT_APP_API_URL}/user/logout?loginmethod=${loginMethod}`,
      method: "get",
      headers: { authorization: accessToken },
    })
      .then((res) => {
        alert("??????????????? ???????????????????????????.");
        resetUserInfo();
      })
      .catch((err) => {
        alert("??????????????? ???????????????. (Logout)");
        resetUserInfo();
      });
    localStorage.removeItem("key");
    localStorage.removeItem("user");
    window.location.href=process.env.REACT_APP_HOME_URL;
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

  const getPage = (newPage) => {
    if(newPage < 1) newPage = 1;
    setPage(newPage);
    newPaging(newPage);
  }

  const newPaging = (newPage) => {
    const object = JSON.parse(JSON.stringify(queryOptions));
    object.page = newPage;  
    setQueryOptions(object);
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Container>
            {!isPostModalOpen ||
            Object.keys(selectedPost).length === 0 ? null : (
              <PostModal
                openPostModal={openPostModal}
                selectedPost={selectedPost}
              />
            )}
            <Nav 
            isLogin={isLogin}
            accessToken={accessToken}
            userInfo={userInfo} 
            clickToLogout={clickToLogout}
            changeAccessToken={changeAccessToken} 
            usernameHandler={usernameHandler}
            LoginApproval={LoginApproval}
            resetUserInfo={resetUserInfo}
            ></Nav>
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
                  <WriteButton>?????????</WriteButton>
                </Link>
              </MainTop>
              <MainTag>
                {Object.keys(queryOptions).map((option) => {
                  if (option === "page") return;
                  return Object.values(queryOptions[option]).map((value) => {
                    if (value === "") return;
                    return <Tag key={value} onClick={()=> {deleteTags(option)}}>{value}</Tag>;
                  });
                })}
                {tagList.length < 1 
                ? null 
                : <Cancel type="button" onClick={()=>{deleteTags("all")}}>
                  ?????????
                  </Cancel>
                }
              </MainTag>
              {/* {postList.length === 0 ? ( */}
                {isLoading
        ? <NoPost>
          <img src={loadingImg} alt="loading"></img>
        </NoPost>
        : postList.length === 0
        ? <NoPost>
          <img src={noImage} alt="no-content"width="300px" height="300px"></img>
          <span>???????????? ????????? ????????????.?????? </span>
          </NoPost>
        : <MainDiv>
        {postList.map((post) => 
        {
          return (
          <Main 
            key={post.postId}
            postId={post.postId}
            imgSrc={post.imageSrc} 
            like={post.like} 
            view={post.view}
            selectPost={selectPost}>
          </Main>
          )
        })}
      </MainDiv>
      }
              <Pagination page={page} getPage={getPage}></Pagination>
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
          <NewPost 
          userInfo={userInfo}
          accessToken={accessToken}
          resetUserInfo={resetUserInfo}
          isLogin={isLogin} 
          clickToLogout={clickToLogout} 
          changeAccessToken={changeAccessToken} 
          usernameHandler={usernameHandler}
          LoginApproval={LoginApproval}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
