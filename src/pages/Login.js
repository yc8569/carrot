import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { carrotLoginStatus, getCarrotUserInfo } from "../redux/modules/user";
import { login } from "../shared/axios";
import { saveToken } from "../shared/localStorage";


function Login () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [btnState, setBtnState] = useState(false);

    const ref = {
        phone: useRef(null),
        password: useRef(null)
    }

    const confirmLogin = (e) => {
        e.preventDefault();
        const userPhoneNum = ref.phone.current.value;
        const password = ref.password.current.value;

        const data = {
          userPhoneNum,
            password
        };
        console.log(data)
        login(data)
            .then((response) => {
          console.log(response)
                
                saveToken(response.data);
                dispatch(carrotLoginStatus(true));
                // dispatch(getCarrotUserInfo());
                alert("로그인 성공!");
                navigate("/main");
            })
            .catch((err) => {
                alert("로그인 실패!");
            });
    }

    const onChange = (e) => { // 버튼 활성화
        const userPhoneNum = ref.phone.current.value;
        const password = ref.password.current.value;

        if (userPhoneNum.length > 0 && password.length > 0) {
            setBtnState(true);
        } else {
            setBtnState(false);
        }
    }

    return (
        <Box>
            <Content>
                <img src={ require('../static/logo.png') }/>
                <Form onSubmit={confirmLogin}>
               
                    <input type="text" placeholder="휴대폰 번호 (- 없이 숫자만 입력)" autoComplete="phone" ref={ref.phone} onChange={onChange} />
                    <input type="password" placeholder="비밀번호" autoComplete="current-password" ref={ref.password} onChange={onChange} />
                    <Button isActive={btnState}>로그인</Button>
                </Form>
            </Content>
        </Box>
    );
}

const Box = styled.div``;

const Content = styled.div`
  padding: 40px 20px 0;

  em {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
  }

  p {
    font-size: 12px;
    margin-top: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    border: 1px solid #BBB;
    height: 50px;
    border-radius: 5px;
    padding: 0 10px;

    &::placeholder {
      color: #ccc;
    }
  }

  input + input {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  height: 80px;
  border-radius: 5px;
  border: none;
  background-color: #DDD;
  font-size: 20px;
  color: #FFF;
  transition: background .3s;
  cursor: pointer;
  ${props => props.isActive ? css`
    background-color: ${props => props.theme.color.orange};
    &:hover {
      background-color: ${props => props.theme.hoverColor.orange};
    }
  `: css`
    background-color: #DDD;
  `}
`;

export default Login;
