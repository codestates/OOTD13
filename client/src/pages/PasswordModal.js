import { useState, useEffect } from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  margin: 0 0;
  padding: 0 0;
`

const Main = styled.div`
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-sizing: border-box;
  justify-content: space-between;
  width: 400px;
  height: min(250px, 450px);
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 0;
  padding: 0 0;
  box-sizing: border-box;
`
const Title = styled.span`
  margin: 0 5px;
  padding: 0 0;
  align-self: center;
  font-size: 15px;
`

const Input = styled.input`
  width: 70%;
  height: 30px;
  color: black;
  border: 1px solid #d4e3fc;
  font-size: 14px;
  padding-left: 7px;
  box-sizing: border-box;
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  background-color: #36C5F0;
  border: 1px solid #00bcf5;
  font-size: 14px;
  align-self: center;
`

const Cancel = styled(Button)`
  background-color: white;
  border: 1px solid gray;
  color: black;
`
export const PasswordModal = () => {
  const userPassword = 123;
  const [curPassword, setCurPassword] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [updatePasswordCheck, setUpdatePasswordCheck] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(false);
  
  useEffect(()=> {
    checkingSamePassword(updatePassword, updatePasswordCheck);
  }, [curPassword, updatePassword, updatePasswordCheck])
  
  const changeCurPassword = (event) => {
    setCurPassword(event.target.value);
  }

  const changeUpdatePassword = (event) => {
    setUpdatePassword(event.target.value);
  }

  const changeUpdatePasswordCheck = (event) => {
    setUpdatePasswordCheck(event.target.value);
  }

  const checkingSamePassword = (origin, check) => {
    console.log(`origin = ${origin} check = ${check}`)
    if(origin === check) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false)
    }
  };

  const checkingPassword = () => {
    // 하나라도 공백이면 단순 return
    if(curPassword === "") {
      alert("현재 비밀번호를 입력하세요");
      return;
    }
    
    if(updatePassword === "") {
      alert("변경할 비밀번호를 입력하세요");
      return;
    } 
    
    if(updatePasswordCheck === "") {
      alert("변경할 비밀번호 확인을 입력하세요");
      return;
    }

    // 유저 패스워드 정보받아와서 비교 필요
    if(Number(curPassword) === userPassword) {
      if(isSamePassword) {
        console.log("업데이트 API"); // API 부분 수정 필요
      } else {
        alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      }
    } else {
      alert("현재 비밀번호가 일치하지 않습니다.");
    } 
  }

  return (
    <Div>
    <Main>
      <Section>
        <Title>현재 비밀번호</Title>
        <Input type="password" onChange={changeCurPassword} placeholder="현재 비밀번호 입력"></Input>
      </Section>
      <Section>
        <Title>변경할 비밀번호</Title>
        <Input type="password" onChange={changeUpdatePassword} placeholder="변경할 비밀번호 입력"></Input>
      </Section>
      <Section >
        <Title>비밀번호 확인</Title>
        <Input type="password" onChange={changeUpdatePasswordCheck} placeholder="변경할 비밀번호 확인"></Input>
      </Section>
        <Button onClick={checkingPassword}>확인</Button>
        <Cancel >취소</Cancel>
    </Main>
  </Div>
  )
}

export default PasswordModal;
