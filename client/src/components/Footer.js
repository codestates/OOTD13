import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const FooterDiv = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: gray;
`
;

const FooterContainer = styled.div`
  background: linear-gradient(0deg, rgba(128, 185, 239, 0.1), rgba(128, 185, 239, 0.1)), #fbfbfb;
  width: 100vw;
  div {
    margin: 0 auto;
    height: 1px;
    border-bottom: 1px solid #dcdcdc;
    background: linear-gradient(0deg, rgba(128, 185, 239, 0.1), rgba(128, 185, 239, 0.1)), #fbfbfb;
    width: 1260px;
  }
`
;


function Footer() {
  return (
    // <FooterContainer>
    // </FooterContainer>
    <FooterDiv>
      © OOTD13, Co., Ltd.. All Rights Reserved
    </FooterDiv>
  )
}

export default Footer;
