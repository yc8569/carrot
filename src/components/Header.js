import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { getCookie } from "../shared/Cookie";
// import { deleteCookie } from "../shared/Cookie";
import { Link } from "react-router-dom";
// import apis from "../api/index";
import { removeToken } from "../shared/localStorage";

const Header = () => {
 
  
  const navigate = useNavigate();

  

const onLogout =()=>{
  // localStorage.clear();
  removeToken();
  navigate('/');
}


  return (
    <StContainer>
        <StTitle>
            당근마켓
        </StTitle>
        <button onClick={()=>{
          navigate('/main')
        }}>HOME</button>
      
         <button onClick={()=>{
          onLogout()
         }}
       >로그아웃</button>
       <button onClick={()=>{
        navigate('/postwrite')
       }}>나의당근올리기</button>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.header`
 
  height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
`;

const StTitle = styled.div`
  font-size: 24px;
`;
