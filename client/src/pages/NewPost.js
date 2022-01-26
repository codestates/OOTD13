import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
var AWS = require('aws-sdk/dist/aws-sdk-react-native');

const ImgBox = styled.div`
  // 이미지 Div
`;
const ImgPreview = styled.img``;
const ImgSrc = styled.input``;
const DescribeContainer = styled.div`
  // 옆에 설명 Div
`;
const DescribeBox = styled.div`
  // span이랑 input Div
`;

const Div = styled.div`
  // 전체 Div
`;
const SpanDescription = styled.span`
  // span.description , span.ootd-tag, span.selected-tag
`;
const SpanProduct = styled.span`
  // span.shirts, span.pants, span.acc, span.outer, span.shoes
`;
const InputProduct = styled.input`
  // input.shirts, input.pants, input.acc, input.outer, input.shoes
`;
const SelectTagBox = styled.div`
  // select 묶음 Div
`;
const SelectTag = styled.select`
  // select.sex, select.weather, select.season, select.style
`;
const OptionTag = styled
const ButtonTagBox = styled.div`
  // button 묶음 Div
`;
const ButtonTag = styled.button`
  // button.order, button.sex, button.season, button.weather
`;

const ButtonCancle = styled.button`
  // button.cancle
`;

const ButtonSubmit = styled.button`
  // button.submit
`;
const Footer = styled.div`
  width: 350px;
  height: 20%;
  display: grid;
  justify-content: center;
  align-self: center;
  color: gray;
  font-size: 14px;
`

export const NewPost = ({userInfo, accessToken}) => {
  const [shirts, setShirts] = useState("")
  const [pants, setPants] = useState("")
  const [acc, setAcc] = useState("")
  const [outer, setOuter] = useState("")
  const [shoes, setShoes] = useState("")
  const [sex,setSex] = useState("")
  const [weather,setWeather] = useState("")
  const [season,setSeason] = useState("")
  const [style,setStyle] = useState("")
  const [previewSrc,setPreviewSrc] = useState(null)

  const sexTag = {'남성':'1','여성':'2'}
  const weatherTag = {'비 오는 날':'1','흐린 날':'2','눈 오는 날':'3','맑은 날':'4'}
  const seasonTag = {'SS시즌':'1','FW시즌':'2'}
  const styleTag = {'Casual':'1','Dandy':'2','Street':'3','Hiphop':'4','Modern':'5','Classic':'6'}
  AWS.config.update({
    region: "ap-northeast-2", // 버킷이 존재하는 리전을 문자열로 입력하기. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-2:2103383f-abd8-41b1-bd30-b700ce368c14", // cognito 인증 풀에서 받아온 키를 문자열로 입력하기. (Ex. "ap-northeast-2...")
    }),
  });
  const imageHandler = (e) => {
  const firstImageFile = e.target.files[0]
  if(!firstImageFile){
    setPreviewSrc(null)
  }
  const upload = new AWS.S3.ManagedUpload({ 
    params: {
      Bucket: "ootd13image", // 업로드할 대상 버킷명 문자열로 작성.
      Key: firstImageFile.name, //업로드할 파일명 
      Body: firstImageFile, // 업로드할 파일 객체
    },
  });
  const promise = upload.promise();

  promise.then(
    function (data) {
      setPreviewSrc(data.Location);
    },
    function (err) {
      console.log(err);
    }
  );
};

  const cancleHandler = () =>{
    window.location.href="http://localhost:3000"
  }

  const submitHandler =() =>{
    if(!previewSrc){
      alert("이미지를 넣어주세요")
    } else {
      axios({
        url: `http://localhost:5000/post?loginmethod=${userInfo.loginMethod||0}`,
        method: 'post',
        headers: {authorization: accessToken},
        data: {
          email: userInfo.email,
          imageSrc: previewSrc,
          shirts,
          pants,
          acc,
          outer,
          shoes,
          sex:sexTag[sex],
          weather:weatherTag[weather],
          season:seasonTag[season],
          style:styleTag[style]
        }
      }).then(()=>{
        window.location.href="http://localhost:3000"
      })
    }
  }
  console.log(userInfo,'@@@@@@@@')
  console.log(accessToken,'!!!!!!!!!!!!')

  const shirtsHandler = (e) =>{
    setShirts(e.target.value)
  }
  const pantsHandler = (e) =>{
    setPants(e.target.value)
  }
  const accHandler = (e) =>{
    setAcc(e.target.value)
  }
  const outerHandler = (e) =>{
    setOuter(e.target.value)
  }
  const shoesHandler = (e) =>{
    setShoes(e.target.value)
  }
  const sexHandler = (e) =>{
    setSex(e.target.value)
  }
  const weatherHandler = (e) =>{
    setWeather(e.target.value)
  }
  const seasonHandler = (e) =>{
    setSeason(e.target.value)
  }
  const styleHandler = (e) =>{
    setStyle(e.target.value)
  }

  return (
    <Div>
      <ImgBox>
        <ImgPreview src={previewSrc}></ImgPreview>
        <ImgSrc type="file" onChange={imageHandler}></ImgSrc>
      </ImgBox>
      <DescribeContainer>
        <SpanDescription>ootd-description</SpanDescription>
        <DescribeBox>
          <SpanProduct>shirts</SpanProduct>
          <InputProduct onChange={shirtsHandler}></InputProduct>
        </DescribeBox>
        <DescribeBox>
          <SpanProduct>pants</SpanProduct>
          <InputProduct onChange={pantsHandler}></InputProduct>
        </DescribeBox>
        <DescribeBox>
          <SpanProduct>acc</SpanProduct>
          <InputProduct onChange={accHandler}></InputProduct>
        </DescribeBox>
        <DescribeBox>
          <SpanProduct>outer</SpanProduct>
          <InputProduct onChange={outerHandler}></InputProduct>
        </DescribeBox>
        <DescribeBox>
          <SpanProduct>shoes</SpanProduct>
          <InputProduct onChange={shoesHandler}></InputProduct>
        </DescribeBox>
        <SpanDescription>ootd-tag</SpanDescription>
        <SelectTagBox>
          <SelectTag onChange={sexHandler}  >
            <option selected disabled></option>
            <option>남성</option>
            <option>여성</option>
            </SelectTag>
          <SelectTag onChange={weatherHandler}>
            <option selected disabled></option>
            <option>비 오는 날</option>
            <option>흐린 날</option>
            <option>눈 오는 날</option>
            <option>맑은 날</option>
            </SelectTag>
          <SelectTag onChange={seasonHandler}>
            <option selected disabled></option>
            <option>SS시즌</option>
            <option>FW시즌</option>
          </SelectTag>
          <SelectTag onChange={styleHandler}>
            <option selected disabled></option>
            <option>Casual</option>
            <option>Dandy</option>
            <option>Street</option>
            <option>Hiphop</option>
            <option>Modern</option>
            <option>Classic</option>
          </SelectTag>
        </SelectTagBox>
        <SpanDescription>selected-tag</SpanDescription>
        <ButtonTagBox>
          <ButtonTag>{sex}</ButtonTag>
          <ButtonTag>{weather}</ButtonTag>
          <ButtonTag>{season}</ButtonTag>
          <ButtonTag>{style}</ButtonTag>
        </ButtonTagBox>
        <ButtonCancle onClick={cancleHandler}>cancle</ButtonCancle>
        <ButtonSubmit onClick={submitHandler}>submit</ButtonSubmit>
      </DescribeContainer>
      <Footer>© OOTD13, Co., Ltd.. All Rights Reserved</Footer>
    </Div>
  );
};

export default NewPost;