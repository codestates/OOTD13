import React from "react";
import "./Main.css";

{/*태그
tag_num: 1001  tag_name: 남성
1002여성
2001비오느날
2002흐린날
2003눈오는날
2004맑은날
3001ss시즌
3002fw시즌
4001캐쥬얼
4002댄디
4003스티릿
4004힙합
4005모던
4006클래식*/}
//article id -> articletag -> tag id 연결구조 확인


export default function Main() {

    const images=[
        //server의 더미이미지 저장 //태그는?
        
    ];

    return (
        <div className="Main">
            <div className="selecttbox">
                <select name = "order">
                <option value="selectorder" selected="selected">정렬</option>
                <option value="best">best</option>
                <option value="highview">조회순</option>
                <option value="bestlike">좋아요순</option>
                </select>
                <select name = "sex">
                <option value="selectsex" selected="selected">성별</option>
                <option value="men">남자</option>
                <option value="women">여자</option>
                </select>
                <select name = "weather">
                <option value="selectweather" selected="selected">날씨</option>
                <option value="rain">비</option>
                <option value="cloud">구름</option>
                <option value="snow">눈</option>
                <option value="sun">맑음</option>
                </select>
                <select name = "style">
                <option value="selectstyle" selected="selected">스타일</option>
                <option value="casual">캐주얼</option>
                <option value="dandy">댄디</option>
                <option value="street">스트릿</option>
                <option value="hiphop">힙합</option>
                <option value="modern">모던</option>
                <option value="classic">클래식</option>
                </select>
            </div>
            <div className="buttoncontainer">
            <div className="sortbutton">
                <button type="reset">조회순</button>
                <button type="reset">남자</button>
                <button type="reset">구름</button>
                <button type="reset">스트릿</button>
            </div>
            <div className="writebutton">
                <input type ="button" onClick="location.href = 'OOTD13/client/src/pages/Posting.js';">글쓰기</input>
            </div>
            </div>
            <h3>total view: </h3>
            <main className="layout">
                <div className="grid gallery"> {/*3x2, 사진 추가시 계속 추가됨 3xN*/}
                    {/*images.map((image, index) => ( //페이지로 정보? 받아서 뿌리나?
                        <img
                            style={{
                                cursor: "pointer"
                            }}
                            src={} //서버에서 이미지 받아와서 뿌리자 모달창도 생각해
                        />
                        ))*/}
                </div>
            </main>
        </div>
    );
}