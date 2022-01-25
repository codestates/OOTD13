import axios from 'axios';
import { useState } from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
`

const Main = styled.div`
  background-color: #FAFAFA;
  border: 1px solid beige;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  margin: 0 0 200px 0;
  padding: 0 0;
`

const Span = styled.span`
  text-align: center;
  margin-top: 20px;
`

const Section = styled.section`
  display: flex;
  margin: 0 10px 0 0;
  padding: 0 0;
  justify-content: flex-end;
  align-content: flex-end;
  width: 100%;
  height: 50%;
`

const Button = styled.button`
  width: 55px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  align-self: center;
  color: white;
  background-color: #36C5F0;
  border: 1px solid #2b99f9;
  margin-right: 5px;
`

const Cancel = styled(Button)`
  background-color: white;
  border: 1px solid gray;
  color: black;
`
export const Withdrawal = () => {
  // 추후 props 처리해야됨.
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQG5hdmVyLmNvbSIsInVzZXJuYW1lIjoi6rWs6rWsIiwicGFzc3dvcmQiOiIxMjM0IiwibG9naW5fbWV0aG9kIjowLCJjcmVhdGVkQXQiOiIyMDIyLTAxLTI1VDA2OjQ0OjUwLjAwMFoiLCJpYXQiOjE2NDMwOTc1ODcsImV4cCI6MTY0MzE4Mzk4N30.XAgDOukIPgNBK3IPXL19m-yztF0xVJcZEAgJdECKeU0";
  const email = "qwp0905@github.com";
  const LOGIN_METHOD = 1;

  const clickToSubmit = () => {
    axios({
      url: `http://localhost:5000/user/withdrawal?loginmethod=${LOGIN_METHOD}`,
      method: "delete",
      headers: {authorization: accessToken},
      data: {email}
    })
    .then((res) => {
      alert("회원탈퇴가 성공적으로 되었습니다.");
      window.location.href = "http://localhost:3000"
    })
    .catch((err) => console.log(err));
  }
  const clickToRedirect = () => {
    window.location.href = "http://localhost:3000"
  }

  return (
    <Div>
      <Main>
        <Span>정말 탈퇴하시겠습니까?</Span>
        <Section>
          <Button onClick={clickToSubmit}>예</Button>
          <Cancel onClick={clickToRedirect}>아니오</Cancel>
        </Section>
      </Main>
  </Div>
  )
}

export default Withdrawal;