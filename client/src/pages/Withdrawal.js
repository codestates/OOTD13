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
  return (
    <Div>
      <Main>
        <Span>정말 탈퇴하시겠습니까?</Span>
        <Section>
          <Button>예</Button>
          <Cancel>아니오</Cancel>
        </Section>
      </Main>
  </Div>
  )
}

export default Withdrawal;