import styled from 'styled-components';
import dummyImg from '../public/img/man.jpeg'
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
  display: flex;
  flex-direction: column;
  width: min(500px, 1000px);
  height: min(700px, 1080px);
`

const Img = styled.img`
  background-color:cadetblue;
  width: 90%;
  height: 80%;
  justify-self: center;
  align-self: center;
  margin-top: 20px;
`
const Inform = styled.section`
  display: flex;
  justify-content: flex-start;
`

const Username = styled.span`
  font-size: 18px;
  display: flex;
  margin: 10px 0 0 25px;
  font-weight: 500;
`
const Title = styled.span`
  color: gray;
  font-weight: 400;
  margin: 0 5px 0 0;
  display: flex;
  margin: 10px 5px 0 25px;
  font-weight: 500;
  
`
const Number = styled.span` 
  color: black;
  margin: 0 0;
`

const Section = styled.section`
  display: flex;
  justify-items: flex-start;
  align-items: flex-end;
  margin: 0 10;
  padding: 0 0;
`

const Line = styled.hr`
  color: black;
  border: 1;
  background-color: black;
  width: 90%;
`

const TagSection = styled.section`
  margin-top: 10px;
  margin-left: 23px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const Tag = styled.span`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  margin: 0 8px 8px 0;
  font-size: 14px;
  font-weight: 500;
  list-style: none;
  border-radius: 6px;
  background-color: #65b9f9;
`

const Viewmore = styled.a`
  text-decoration: underline;
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  width: auto;
  height: 10%;
  color: #3D88D7;
  margin: 0 25px 10px 0;
  font-size: 18px;
  font-weight: 700;
  box-sizing: border-box;
`

export const Post = () => {
  return (
    <Div>
      <Main>
        <Img src={dummyImg}></Img>
        <Inform class="post-form-inform">
          <Username class="post-form-username">주형</Username>
          <Section>
            <Title>조회수</Title>
            <Number class="post-form-views-num">932</Number>
          </Section>
          <Section>
            <Title>좋아요</Title>
            <Number class="post-form-like-num">32</Number>
          </Section>
        </Inform>
        <Line />
        <TagSection>
          <Tag>남</Tag>
          <Tag>맑음</Tag>
          <Tag>ss</Tag>
          <Tag>casual</Tag>
        </TagSection>
        <Viewmore href="#">view-more</Viewmore>
      </Main>
  </Div>
  )
}

export default Post;
