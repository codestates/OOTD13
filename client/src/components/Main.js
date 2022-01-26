import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import PostModal from "./PostModal";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 440px;
  margin: 10px 20px 10px 20px;
  /* background-color: bisque; */
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
  font-weight: 700;
  color: #C6BBAA;
`

function Main({postId, username, imgSrc, like, view, tag}) { 
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const openPostModal = () => {
    setIsPostModalOpen(!isPostModalOpen);
  }

  return (
    <Div>
    {!isPostModalOpen 
      ? null
      : <div>
      <PostModal props={postId, username, imgSrc, like, view, tag} />
      </div>}
      <Img key={postId} src={imgSrc} onClick={openPostModal}></Img>
      <Inform>조회수 {view} · 좋아요 {like}</Inform>
    </Div>
  )
}

export default Main;