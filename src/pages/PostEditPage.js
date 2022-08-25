// import {React, useState} from "react";
// import styled from "styled-components";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updatePost } from "../redux/modules/post";
// import { carrotGetPost } from "../redux/modules/post";
// import { useEffect } from "react";
// import {Card, Image} from 'react-bootstrap';

// // import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

// const PostEditPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [fileImage, setFileImage] = useState("");  // 미리보기스테이트
//   const Detail = useSelector((state) => state.post.post);
//   const [enteredNum, setEnterdNum] = useState();
//   const defaultImage = Detail.imageUrl;
//   const defaultTitle = Detail.title;
//   const defaultPrice = Detail.price;
//   const defaultComment = Detail.contents;



//   //이미지 미리보기
// //   const [image, setImage] = React.useState("");
// //   //서버에 보내는 이미지 url

// //   const [imageUrl, setImageUrl] = React.useState("");

//   const [title, setTitle] = useState(defaultTitle);

//   const [price, setPrice] = useState();

//   const [content, setContent] = useState(defaultComment);






//   const changeTitle = (e) => {
//     setTitle(e.target.value);
//     console.log(e.target.value)
//   };

//   const changePrice = (e) => {
//     setPrice(e.target.value);
//     console.log(e.target.value)


//     let value = e.target.value;
//    value = Number(value.replaceAll(",", ""));
//    if (isNaN(value)) {
//      //NaN인지 판별
//      value = 0;
//    } else {
//      setEnterdNum(value.toLocaleString("ko-KR"));
//    }





//   };

//   const changeContent = (e) => {
//     setContent(e.target.value);
//     console.log(e.target.value)
//   };

//   const changeImageUrl = (e) => {
//     setFileImage(URL.createObjectURL(e.target.files[0]));  //미이보기기능


//     setImageUrl(e.target.files[0]);
//     console.log(e.target.files[0])
//   };

//   const submitHandler = () => {










//     // if (imageUrl === "" || title === "" || content === "" || price === "") {
//     //   alert("모든 사항을 기입해주세요.");
//     //   return;
//     // } else {
//     //   dispatch(
//     //     updatePost(id, {
//     //       title: title,

//     //       price: price,
//     //       comment: content,
//     //       file: imageUrl,
//     //     })
//     //   );
//     //   //console.log(imageUrl)
//     //   window.location.href = "/";
//     // }
//   };


//   useEffect(() => {
//     dispatch(carrotGetPost(id));
//   }, []);

//   return (
//     <PostCont>
//       <HeaderNav>
//         <Link to="/">
//           <HeaderBtn>
           
//           </HeaderBtn>
//         </Link>
//         <Title>중고거래 글쓰기</Title>
//         {/* <Link to="/main"> */}
//         <HeaderBtn onClick={submitHandler} style={{ color: "#FF8A3C" }}>
//           완료
//         </HeaderBtn>
//         {/* </Link> */}
//       </HeaderNav>

//       <FormBody id="postForm" name="postForm">
//         <Div>
//           <label htmlFor="image">
//           <Card>
//                 {!fileImage && <p style={{paddingTop:"15px"}}>이미지 미리보기💾</p>}
//                 <Image
//                 //  alt="이미지 미리보기💾"
//                  accept="image/*"
//                  src={fileImage}
//                  rounded={true}
//                />
//               </Card>
//             <AddBtn>
//               <p sx={{ fontSize: "40px" }} >수정할사진</p>
//               <input
              
//                 id="image"
//                 name="image"
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={(e) => {
//                   changeImageUrl(e);
//                 //   encodeFileToBase64(e.target.files[0]);
//                 }}
//               ></input>
//             </AddBtn>
//           </label>


//           {/* <div style={{ width: "120px", height: "120px", margin: "10px" }}>
//             {image && (
//               <img
//                 src={image}
//                 alt="preview-img"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   backgroundSize: "cover",
//                 }}
//               />
//             )}
//           </div> */}

          
//         </Div>
//         <DetailCont>
//           <Input
//             type="text"
//             id="title"
//             name="title"
//             placeholder="글 제목"
//             onChange={changeTitle}
//             defaultValue={defaultTitle}
//           />
         
//           <Input
//             type="text"
//             id="price"
//             name="price"
//             // placeholder="₩"
//             onChange={changePrice}
//             // defaultValue={defaultPrice}
//             value={enteredNum || ""}
//           />
//           <label htmlFor="price" />
//         </DetailCont>

//         <label htmlFor="content" />
//         <textarea
//           name="content"
//           id="content"
//           className="content"
//           rows="10"
//           style={{
//             height: "70%",
//             border: "1px solid #FAFAFA",
//             fontSize: "20px",
//             resize: "none",
//             boxSizing: "border-box",
//             padding: "10px",
//           }}
//           placeholder={` 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)`}
//           onChange={changeContent}
//           defaultValue={defaultComment}
//         ></textarea>
//       </FormBody>
//     </PostCont>
//   );
// };
// const PostCont = styled.div`
//   width: 720px;
//   box-sizing: border-box;
//   flex-direction: column;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   border-radius: 10px;
//   background-color: white;
//   height: 600px;
//   gap: 1rem;
//   /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); */
//   & > * {
//     width: 100%;
//   }
// `;

// const Title = styled.div`
//   font-size: 30px;
//   font-weight: 500;
// `;
// const Div = styled.div`
//   width: 100%;
//   display: flex;
//   /* border-bottom: 1px solid #ddd; */
//   /* padding: 10px 16px; */
//   /* gap: 15px; */
// `;
// const FormBody = styled.form`
//   box-sizing: border-box;
//   flex-direction: column;
//   width: 100%;
//   display: flex;
//   border-bottom: 1px solid #ddd;
//   /* padding: 10px 16px; */
//   /* gap: 15px; */
// `;

// const HeaderNav = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   border-bottom: 2px solid #ddd;
//   padding: 10px;
//   justify-content: space-between;
// `;
// const HeaderBtn = styled.button`
//   border: none;
//   background-color: white;
//   width: 50px;
//   height: 50px;
//   font-size: 1rem;
//   font-weight: 500;
//   margin: 0 10px;
//   border-radius: 10px;

//   &:hover {
//     background-color: #eee;
//   }
// `;

// const AddBtn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 120px;
//   height: 120px;
//   border: 1px solid #ddd;
//   background-color: white;
//   margin: 10px;

//   /* transition: 0.5s; */
//   cursor: pointer;

//   &:hover {
//     background-color: #212123;
//     color: white;
//   }
// `;
// // const UploadImage = styled.img`
// //   width: 120px;
// //   height: 120px;
// //   background-size: cover;
// //   margin: 10px;

// //   /* background-color: #eee; */
// //   background-image: url("https://via.placeholder.com/120");
// // `;

// const DetailCont = styled.div``;

// const Input = styled.input`
//   box-sizing: border-box;
//   font-size: 1.1em;
//   height: 50%;
//   width: 100%;
//   border: 1px solid #fafafa;
//   padding: 15px;
// `;

// export default PostEditPage;







import React from "react";
import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef} from "react";
import {Card, Image} from 'react-bootstrap';
import { carrotPost } from "../redux/modules/post";



const PostEditPage = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const fileInput = useRef();
   const img_ref = useRef();
   const title_ref = useRef();
   const price_ref = useRef();
   const contents_ref = useRef();
   const chk_ref = useRef();
   // const [category, setCategory] = useState();
   // const [imageSrc, setImageSrc] = useState();
   const [enteredNum, setEnterdNum] = useState();
   // const [price, setPrice] = useState(0);
   const post = useSelector((state) => state.post.postList)

   const [fileImage, setFileImage] = useState("");  // 미리보기스테이트
      
  const [fileImgUp, setImage] = useState();    //보내줄 파일을 저장해줄 state
  
  // 카테고리주석이였음
const initialState =  {
   // post_id : 1,
   title: "제목1",
   contents:"내용1",
   category:"카테고리1",    
   price : "10000",
   imageUrl: "/images/1.png",
   
   }
   const [form, SetForm] = useState(initialState);
   const formData = new FormData();


   const selectFile = async (e) => {

     
     
      setFileImage(URL.createObjectURL(e.target.files[0]));  //미이보기기능
      setImage(e.target.files[0])   // 서버용

   
 
   };

   const handleChangeState = (e) => {
    // console.log(e.target.name, e.target.value)
      SetForm({
         ...form,
         [e.target.name]: e.target.value,
       });
      // console.log("됨")
   }
     
       // 금액 콤마(,) 찍기
     
       const priceComma = (e) => {
         // setPrice(e.target.value);     // 이값이 변하면 렌더링
         // console.log(e.target.name, e.target.value)
         SetForm({
            ...form,
            [e.target.name]: e.target.value,
          });

         let value = e.target.value;
    value = Number(value.replaceAll(",", ""));
    if (isNaN(value)) {
      //NaN인지 판별
      value = 0;
    } else {
      setEnterdNum(value.toLocaleString("ko-KR"));
    }

        
         // console.log("됨")
          
       };
     


       // 콤마제거
      //  const commaRemovePrice = enteredNum?.replace(/,/g, ""); // g -> global
      //  let numberPrice = parseInt(commaRemovePrice);
      //  console.log(numberPrice);
     
       const onSubmitHandler = (event) => {
     
         event.preventDefault();
         const modifiedAt = new Date().getTime();
 

         if (form.title.trim() === "" || form.contents.trim() === "" 
         || form.price.trim() === "" || form.imageUrl.trim() === "") return(alert("모든칸을 입력하세요"));
         formData.append(
           "postRequestDto",
           new Blob([JSON.stringify(form)], {
             type: "application/json",
           })
         );
     
         if (fileImgUp !== undefined) {
           formData.append("file", fileImgUp);
         }
         for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));   //폼데이터 for문 돌려확인
         }
         
         dispatch(carrotPost(formData));
         
         SetForm(initialState);
         navigate('/main');
       

       };




return (
   <Wrap>
     <Header>
       <button
         size="25"
         onClick={() => {
           navigate("/main");
         }}
       >홈으로</button>
       <h3>중고거래 글쓰기</h3>
       {/* <h5 onClick={upload}>완료</h5> */}
     </Header>
     <form onSubmit={onSubmitHandler}>
     <Container>
       <File>
         <label htmlFor="file">
           <h4>파일</h4>
         </label>
         <input type="file" id="file" ref={fileInput} onChange={selectFile} name="imageUrl" />
         {/* {imageSrc && <img src={imageSrc} alt="preview-img" />} */}
       </File>

       <Card>
                {!fileImage && <p style={{paddingTop:"15px"}}>이미지 미리보기💾</p>}
                <Image
                //  alt="이미지 미리보기💾"
                 accept="image/*"
                 src={fileImage}
                 rounded={true}
               />
              </Card>

       <div>
         <Title>
           <input name="title" placeholder="글 제목" ref={title_ref} onChange={handleChangeState}/>
         </Title>
         <Categorie>
            {/* <div>카테고리 선택</div> */}
            <select name="category" id="category" onChange={handleChangeState}>
              <option value="none">카테고리 선택</option>
              <option value="디지털기기">디지털기기</option>
              <option value="생활가전">생활가전</option>
              <option value="가구&인테리어">가구/인테리어</option>
              <option value="유아동">유아동</option>
              <option value="생활&가공식품">생활/가공식품</option>
              <option value="유아도서">유아도서</option>
              <option value="스포츠/레저">스포츠/레저</option>
              <option value="여성패션">여성패션/잡화</option>
              <option value="남성패션">남성패션/잡화</option>
              <option value="게임&취미">게임/취미</option>
              <option value="뷰티&미용">뷰티/미용</option>
              <option value="반려동물용품">반려동물용품</option>
              <option value="도서&티켓&음반">도서/티켓/음반</option>
              <option value="기타">기타 중고물품</option>
              <option value="삽니다">삽니다</option>
            </select>
            {/* <IoIosArrowForward /> */}
          </Categorie>

       </div>

       <Price>
         <input
           type="text"
           name="price"
           placeholder="가격 [선택사항]"
           ref={price_ref}
           onChange={priceComma}
           value={enteredNum || ""}
         />
         {/* <label htmlFor="price">
           <input  type="checkbox" id="price" ref={chk_ref} />
           가격 제안받기
         </label> */}
       </Price>

       <textarea
         name="contents"
         cols="40"
         rows="5"
         placeholder="올릴 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)"
         ref={contents_ref}
         onChange={handleChangeState}
       />
       <button className="add-button">추가하기</button>
     </Container>
     </form>
   </Wrap>
 );
}

export default PostEditPage;

const Wrap = styled.div`
  box-sizing: border-box;
  font-size: 13px;

  input {
    font-size: 13px;
  }

  textarea {
    margin-top: 45px;
    border: none;
    outline: none;
    resize: none;
  }
  textarea::placeholder {
    color: #dadada;
    font-size: 13px;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 15px;
  border-bottom: 1px solid #dadada;

  h4 {
    font-weight: 800;
  }
  h5 {
    color: #ff7e36;
  }
`;
const Container = styled.div`
  padding: 0 16px;
`;

const File = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid #dadada;

  .camera {
    font-size: 35px;
  }
  label {
    cursor: pointer;
  }
  input[type="file"] {
    display: none;
  }

  img {
    width: 130px;
    height: 130px;
    margin-left: 10px;
    border-radius: 5px;
  }
`;

const Title = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #dadada;

  outline: none;
  input {
    border: none;
    outline: none;
  }

  input::placeholder {
    color: #dadada;
  }
`;
const Categorie = styled(Title)`
  display: flex;
  justify-content: space-between;

  select {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
  }
`;

const Locate = styled(Title)`
  display: flex;
  justify-content: space-between;
`;

const Price = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input[type="checkbox"] {
    accent-color: #ff7e36;
  }
`;


