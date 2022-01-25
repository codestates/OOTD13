import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 440px;
  margin: 10px 20px 10px 20px;
  background-color: bisque;
`
const Img = styled.img`
  align-self: flex-start;
  justify-self: center;
  display: block;
  margin: 0 auto;
  width: 400px;
  height: 400px;
`

const Inform = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`


function Main() { 
  return (
    <Div>
      <Img></Img>
      <Inform>조회수 156 · 좋아요 60</Inform>
    </Div>
  )
}

export default Main;