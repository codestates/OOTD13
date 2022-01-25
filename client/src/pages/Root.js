import styled from 'styled-components'
import {Link} from "react-router-dom";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  justify-content: center;
`
export const Div = styled.div`
  background-color: gray;
  width: 30vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  margin: 0 0;
  border-radius: 30px;
`
export const Button = styled.button`
  color: white;
  width: 200px;
  height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 30px;
  background-color: #36C5F0;
`

export const Root = () => {
  

  return (
      <div className="App">
        <header className="App-header">
          <MainDiv>
            <Div>
              <Link to="/">
                <Button>홈</Button>
              </Link>
              <Link to="/signup">
                <Button>회원가입</Button>
              </Link>
              <Link to="/login">
                <Button>로그인</Button>
              </Link>
              <Link to="/passwordModal"> 
                <Button>패스워드 모달</Button>
              </Link>
              <Link to="/withdrawal">
                <Button>회원탈퇴 모달</Button>
              </Link>
              <Link to="/Post">
                <Button>게시물</Button>
              </Link>
            </Div>
          </MainDiv>
        </header>
      </div>
  )
}


export default Root