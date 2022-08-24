import MainItemList from '../components/MainItemList';
import Layout from '../components/Layout';
import React, { useState } from "react";
import HaederBack from "../components/HeaderBack";
import { useNavigate } from "react-router-dom";

// import { useSelector } from 'react-redux';


function MainPage () {
  const navigate = useNavigate();
  const [pageState, setState] = useState(<MainItemList/>);
//   const user = useSelector((state) => state.user);

  return (
    <Layout>
    <div className="Wrap">
      <HaederBack/>
      <div className="TMenuBar"> 
        <p>유저정보</p>
        
      </div>
      
      <div className="topView">
        {pageState}메인리스트
      </div>
      
      <div className="bottomView">
        <div className="BMenuBar"> 
          <div className="BMenuBox" onClick={() => { navigate("/main") }}>
            <div size="30px" color={"black"}/>
            <p style={{color: "black"}}></p>HOME</div>
          <div className="BMenuBox" onClick={() => { navigate("/mypage") }}>
            <div size="40px" color={"#AAAAAA"}/>
              <p style={{color: "#AAAAAA"}}>MY Carrot</p> 
          </div>        
        </div>
      
      </div>
    
    </div>
    </Layout>
  )
}

export default MainPage;