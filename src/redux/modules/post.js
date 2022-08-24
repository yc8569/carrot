import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../../shared/axios";

// const initialState = {
//     postList: 
//     [
//         {
//         post_id : 1,
//         title: "제목1",
//         content:"내용1",
//         category:"카테고리1",
//         price : "10000",
//         imageUrl: "/images/1.png",
        
//         },
//         {
//         post_id : 2,
//         title: "제목2",
//         content:"내용2",
//         category:"카테고리1.",
//         price : "20000",
//         imageUrl:"/images/2.png",
        
//         }
//          ],
//     post: {
//         post_id : 0,
//         title: "",
//         content:"",
//         category:"",
//         price : "",
//         imageUrl:"/images/2.png",
//     },
//   }


// 메인화면 포스트 리드
export const loadMainposts = () => {
  
  return async function (dispatch) {
    await instance
      .get("/posts")
      .then((re) => {
        console.log(re.data)
        dispatch(roadPosts(re.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};




// 게시물 등록
export const carrotPost = (formData) => {
  return async function (dispatch) {
    try {console.log("넘어옴")
      const res = await instance.post("/posts", formData);
      //console.log(res)
      dispatch(uploadPost(formData));
    // navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };
};

// 게시물 상세 조회
export const carrotGetPost = (postId) => {
  return async function (dispatch) {
    await instance
      .get(`api/post/${postId}`)
      .then((res) => {
        // console.log(res.data);
        dispatch(getLoadPost(res.data.detailPost));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


const postSlice = createSlice({
  name: "post",
  initialState:{
    postList:[],
    post: {},
  },
  reducers: {
    uploadPost: (state, action) => {
      state.postList.push(action.payload);
    },
    getLoadPost: (state, action) => {
      state.post = action.payload;
    },
    roadPosts: (state, action) => {
      state.postList = action.payload;
    },
    setLike: (state, action) => {
      state.post.likeNum = action.payload.likeNum;
      state.post.userLike = action.payload.userLike;
    },
    changeTradeState: (state, action) => {
      state.postList = state.postList.map((post) => {
        if (post.post_id === action.payload.id) {
          post.tradeState = action.payload.tradeState;
        }
        return post;
      });
    },
  },
});

const { uploadPost, getLoadPost, roadPosts, changeTradeState, setLike } =
  postSlice.actions;
export default postSlice.reducer;
