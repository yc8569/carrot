import React from "react";
import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef} from "react";
import {Card, Image} from 'react-bootstrap';
import { carrotPost } from "../redux/modules/post";



const PostWritePage = () => {
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
  
  
const initialState =  {
   // post_id : 1,
   title: "제목1",
   contents:"내용1",
   // category:"카테고리1",
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
         // for (let key of formData.keys()) {
         //    console.log(key, ":", formData.get(key));   //폼데이터 for문 돌려확인
         // }
         
         dispatch(carrotPost(formData));
         
         SetForm(initialState);
         
         // window.location.reload();
         // console.log(fileImgUp);

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

export default PostWritePage;

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


// // 이미지 업로드

// function Add() {



 

//   return (
//     <Wrap>
//       <Header>
//         <IoIosClose
//           size="25"
//           onClick={() => {
//             navigate("/main");
//           }}
//         />
//         <h4>중고거래 글쓰기</h4>
//         <h5 onClick={upload}>완료</h5>
//       </Header>

//       {/* 사진업로드 */}
//       <Container>
//         <File>
//           <label htmlFor="file">
//             <IoIosCamera className="camera" />
//           </label>
//           <input type="file" id="file" ref={fileInput} onChange={selectFile} />
//           {imageSrc && <img src={imageSrc} alt="preview-img" />}
//         </File>

//         <div>
//           <Title>
//             <input placeholder="글 제목" ref={title_ref} />
//           </Title>

//           <Categorie>
//             {/* <div>카테고리 선택</div> */}
//             <select name="category" id="category" onChange={changeCategory}>
//               <option value="none">카테고리 선택</option>
//               <option value="디지털기기">디지털기기</option>
//               <option value="생활가전">생활가전</option>
//               <option value="가구&인테리어">가구/인테리어</option>
//               <option value="유아동">유아동</option>
//               <option value="생활&가공식품">생활/가공식품</option>
//               <option value="유아도서">유아도서</option>
//               <option value="스포츠/레저">스포츠/레저</option>
//               <option value="여성패션">여성패션/잡화</option>
//               <option value="남성패션">남성패션/잡화</option>
//               <option value="게임&취미">게임/취미</option>
//               <option value="뷰티&미용">뷰티/미용</option>
//               <option value="반려동물용품">반려동물용품</option>
//               <option value="도서&티켓&음반">도서/티켓/음반</option>
//               <option value="기타">기타 중고물품</option>
//               <option value="삽니다">삽니다</option>
//             </select>
//             {/* <IoIosArrowForward /> */}
//           </Categorie>

//           <Locate>
//             <div>{location}</div>
//             {/* <IoIosArrowForward /> */}
//           </Locate>
//         </div>

//         <Price>
//           <input
//             type="text"
//             placeholder="가격 [선택사항]"
//             ref={price_ref}
//             onChange={priceComma}
//             value={enteredNum || ""}
//           />
//           <label htmlFor="price">
//             <input type="checkbox" id="price" ref={chk_ref} />
//             가격 제안받기
//           </label>
//         </Price>

//         <textarea
//           cols="40"
//           rows="5"
//           placeholder="올릴 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)"
//           ref={content_ref}
//         />
//       </Container>
//     </Wrap>
//   );
// }
// const Wrap = styled.div`
//   box-sizing: border-box;
//   font-size: 13px;

//   input {
//     font-size: 13px;
//   }

//   textarea {
//     margin-top: 45px;
//     border: none;
//     outline: none;
//     resize: none;
//   }
//   textarea::placeholder {
//     color: #dadada;
//     font-size: 13px;
//   }
// `;
// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   padding: 16px 15px;
//   border-bottom: 1px solid #dadada;

//   h4 {
//     font-weight: 800;
//   }
//   h5 {
//     color: #ff7e36;
//   }
// `;
// const Container = styled.div`
//   padding: 0 16px;
// `;

// const File = styled.div`
//   padding: 30px 0px;
//   border-bottom: 1px solid #dadada;

//   .camera {
//     font-size: 35px;
//   }
//   label {
//     cursor: pointer;
//   }
//   input[type="file"] {
//     display: none;
//   }

//   img {
//     width: 130px;
//     height: 130px;
//     margin-left: 10px;
//     border-radius: 5px;
//   }
// `;

// const Title = styled.div`
//   padding: 20px 0px;
//   border-bottom: 1px solid #dadada;

//   outline: none;
//   input {
//     border: none;
//     outline: none;
//   }

//   input::placeholder {
//     color: #dadada;
//   }
// `;
// const Categorie = styled(Title)`
//   display: flex;
//   justify-content: space-between;

//   select {
//     width: 100%;
//     border: none;
//     outline: none;
//     font-size: 14px;
//   }
// `;

// const Locate = styled(Title)`
//   display: flex;
//   justify-content: space-between;
// `;

// const Price = styled(Title)`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   input[type="checkbox"] {
//     accent-color: #ff7e36;
//   }
// `;
