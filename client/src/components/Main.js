import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0;
  /* background-color: bisque; */
`

const ImgDiv = styled(Div)`
  display: flex;
  text-align: center;
  /* align-items: center;
  justify-items: center;   */
  height: 100%;
  /* background-color: black; */
`


const Inform = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5px;
  font-weight: 500;
  margin-top: 10px;
  color: gray;
  /* background-color: chocolate; */
`

const Img = styled.img`
  align-self: flex-start;
  justify-self: center;
  border-radius: 10px;
  display: flex;
  display: block;
  margin: auto;
  padding: 0;
  width: 340px;
  height: 340px;
  overflow: hidden;
  cursor: pointer;
`


function Main({postId, imgSrc, like, view, selectPost}) { 
  return (
    <Div>
      <ImgDiv>
      <Img key={postId} src={imgSrc} onClick={()=> {selectPost(postId)}}></Img>
      </ImgDiv>
      <Inform>조회수 {view.toLocaleString()}{" "}·{" "}좋아요 {like.toLocaleString()}</Inform>
    </Div>
  )
}

export default Main;