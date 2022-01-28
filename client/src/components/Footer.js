import styled from "styled-components";
const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 500;
  background-color: #343A40;
  color: lightgray;
  margin: auto;
  height: 10vh;
  width: 100%;
`
;

const GithubList = styled.div`
  display: flex;
  justify-content: space-around;
  width: max(700px, 30%);
  margin-bottom: 10px;
  /* background-color: blueviolet; */
`

const GitDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: auto;
  /* align-content: space-between; */
`

const GitTag = styled.img`
  width: auto;
  margin-bottom: 10px;
  /* background-color: blueviolet; */
`

const Span = styled.span`
  justify-self: flex-end;
`;

function Footer() {
  return (
    <FooterDiv>
      <GithubList>
        <GitDiv>
          <a href="https://github.com/Jhin3283" target="_blank" >
            <img alt="JHIN3283's Github" src="https://img.shields.io/badge/GitHub-Jhin3283-181717?style=for-the-badge&logo=GitHub&logoColor=181717"></img>
          </a>
          </GitDiv>
          <GitDiv>
            <a href="https://github.com/qwp0905" target="_blank">
              <img  alt="QWP0905's Github" src="https://img.shields.io/badge/GitHub-qwp0905-181717?style=for-the-badge&logo=GitHub&logoColor=181717"></img>
            </a>
          </GitDiv>
          <GitDiv>
            <a href="https://github.com/Mr-Hanbean" target="_blank">
              <img alt="Mr-Hanbean's Github" src="https://img.shields.io/badge/GitHub-MR.HANBEAN-181717?style=for-the-badge&logo=GitHub&logoColor=181717"></img>
            </a>
        </GitDiv>
      </GithubList>
      <Span>© OOTD13, Co., Ltd.. All Rights Reserved</Span>
    </FooterDiv>
  )
}

export default Footer;
