// import "../public/css/listForm.css";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { loadMainposts } from "../redux/modules/post";


function MainItemList() {
//   const dispatch = useDispatch();
//   const [boardList, setBoardList] = useState();

  const mainPostList = useSelector((state) => state.post.postList);
//   const user = useSelector((state) => state.user);
console.log(mainPostList);

//   React.useEffect(() => {
//     dispatch(loadMainposts());
//   }, [boardList, dispatch]);

//   const navigate = useNavigate();


// const mainPostList = [
//     {
//     post_id : 1,
//     title: "제목1",
//     content:"내용1",
//     category:"카테고리1",
//     price : "10000",
//     imageUrl: "/images/1.png",
//     locations: { fullName: "서울시 동작구", name: "상도동" },
//     },
//     {
//     post_id : 2,
//     title: "제목2",
//     content:"내용2",
//     category:"카테고리1.",
//     price : "20000",
//     imageUrl:"/images/2.png",
//     userLocation: { fullName: "서울시 강남구 삼성동", name: "삼성동" },
//     }
//      ]







  return (
    <div className="MainListBox">
    {mainPostList.map((list, index) => (
        <div key={index}>
            <CardBox className="card">
              <div
                style={{ display: "flex" }}
              
              >
                <Img src={list.imageUrl} />
                <TextArea>
                  <span
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      padding: "0 5px",
    
                      width: "200px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {list.title}
                  </span>
             
                  <TradeState>
                    <span
                      style={{
                        fontSize: "13px",
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      {Number(list.price).toLocaleString("ko-KR")}원
                    </span>
                  </TradeState>
                </TextArea>
              </div>
          
            </CardBox>
        </div>
      ))}
    
    {/* <FixedButton>
      <buttom
        onClick={() => {
          navigate("/add");
        }}
      />
    </FixedButton> */}
    </div> )
}

const CardBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  padding: 10px;
`;

const FixedButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 120px;
  right: 30px;
  width: 70px;
  height: 70px;
  font-size: 30px;
  background-color: ${(props) => props.theme.color.orange};
  color: ${(props) => props.theme.color.white};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px 0 #999;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;

const TradeState = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const SoldOut = styled.div`
  padding: 6px 5px;
  width: 65px;
  border-radius: 5px;
  background-color: #565656;
  color: white;
  font-size: 12px;
  text-align: center;
`;

const Book = styled(SoldOut)`
  width: 55px;
  background-color: #34bf9e;
`;

export default MainItemList;