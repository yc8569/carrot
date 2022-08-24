



import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


// import { carrotGetPost } from "../redux/modules/post";




const DetailPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // //파라미터로 postID값 가져오기
  const { id } = useParams();
  const { title, price, category } =
    useSelector((state) => state.post.list);

  // const currentUser = getNick();
  // const sameUser = nickname === currentUser;
  //console.log(sameUser);





  useEffect(() => {
    dispatch(carrotGetPost(id));
  }, []);


  return (
    <DetailCont>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Div>
          <div
            variant="text"
            style={{
              position: "relative",
              left: "20px",
              top: "12px",
              color: "lightgrey",
              fontSize: "1.6em",
              lineHeight: "0.5",
            }}
            onClick={() => navigate(-1)}
          ></div>
          <div
            variant="text"
            style={{
              position: "relative",
              left: "50px",
              top: "12px",
              fontSize: "1.9em",
              color: "lightgrey",
              lineHeight: "2.3",
            }}
            onClick={() => navigate("/main")}
          ></div>
        </Div>
        
        
        
        {{id} ? (
          <React.Fragment>
            <button
              variant="text"
              style={{
                color: "lightgrey",
                zIndex: "9999",
                lineHeight: "3",
                backgroundColor: "transparent",
              }}
              onClick={openModal}
            >
              ***
            </button>
            {/* <Modal
              // postId={postId}
              open={modalOpen}
              close={closeModal}
              header="수정 및 삭제하기"
            ></Modal> */}
          </React.Fragment>
        ) : (
          <button
            variant="text"
            style={{
              color: "lightgrey",
              zIndex: "9999",
              lineHeight: "3",
              backgroundColor: "transparent",
            }}
            disabled
          >
            ***
          </button>
        )}


        
      </div>

      <ImageWrap>
        이미지사진
        {/* <img
          src={image}
          alt={id}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "-webkit-fill-available",
            width: "inherit",
          }}
        /> */}
      </ImageWrap>
      <Div style={{ height: "100%", top: "0" }}>
        <ContentWrap>
          <NickName>
            <AccountCircleIcon fontSize="large" />
            닉네임
            {/* {nickname} */}
          </NickName>
          {/* <Title>{title}</Title> */}
          <Title>타이틀</Title>
          <ItemArea FS="1.0rem">
            {/* {category}&nbsp;&nbsp;&nbsp;{timestamp}&nbsp;&nbsp;올림 */}
            카테고리
          </ItemArea>
          {/* <ItemArea FS="1.3rem">{comment}</ItemArea> */}
          <ItemArea FS="1.3rem">코멘트</ItemArea>
        </ContentWrap>
        <div>
          <HeartValue>관심 0</HeartValue>
        </div>
        <div>
          <Footer>
            <div>
              <Price>
                <IconButton>
                  <FavoriteBorderOutlinedIcon fontSize="large" />
                </IconButton>
                {/* {price}원 */}
                10,000원
              </Price>
            </div>
            <div>
              <button
                style={{
                  fontSize: "15px",
                  color: "white",
                  backgroundColor: "#FF8A3D",
                  width: "100px",
                  height: "3em",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              >
                채팅하기
              </button>
            </div>
          </Footer>
        </div>
      </Div>
    </DetailCont>
  );
};



export default DetailPage;

const DetailCont = styled.div`
  box-sizing: border-box;
  width: 720px;
  height: 90vh;
  background-color: #eee;
  border-radius: 10px;
  flex-direction: column;
`;
const ImageWrap = styled.div`
  top: 0;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid lightgrey;
`;

const Div = styled.div``;

const ContentWrap = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;

  height: 250px;
`;

const ItemArea = styled.div`
  padding-top: 15px;
  font-size: ${(props) => props.FS};
  width: 100%;
  font-weight: 300;

  //height:100%;
`;
const Price = styled.div`
  padding: 15px;
  font-size: 1.3rem;
  font-weight: 700;
  width: 100%;
  font-weight: 300;
  line-height: 2;
  //height:100%;
`;
const HeartValue = styled.div`
  padding: 20px;
  // font-size: ${(props) => props.FS};
  width: 100%;
  font-weight: 300;

  //height:100%;
`;
const NickName = styled.div`
  padding-top: 5px;
  font-size: 20px;
  width: 100%;
  height: 20%;
  font-weight: 500;
  line-height: 1.5;
  //height:100%;
`;
const Title = styled.div`
  padding-top: 5px;
  font-size: 30px;
  width: 100%;
  font-weight: 700;
  //height:100%;
`;

const Footer = styled.div`
  border-top: 1px solid black;
  width: 100%;
  display: flex;
  background-color: #eee;
  justify-content: space-between;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 5%;
  align-items: center;
`;
