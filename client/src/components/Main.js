import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 440px;
  margin: 10px 20px 10px 20px;
  /* background-color: bisque; */
`

const Img = styled.img`
  align-self: flex-start;
  border-radius: 10px;
  justify-self: center;
  display: block;
  margin: 0 auto;
  width: min(auto, 400px);
  height: 400px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
  }
  /* background-color: black; */
`

const Inform = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-weight: 500;
  color: gray;
`

function Main({postId, imgSrc, like, view, selectPost}) { 
  return (
    <Div>
      <Img key={postId} src={imgSrc} onClick={()=> {selectPost(postId)}}></Img>
      <Inform>조회수 {view}{" "}·{" "}좋아요 {like}</Inform>
    </Div>
  )
}

export default Main;