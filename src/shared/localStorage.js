// export function saveToken(token) {
//     localStorage.setItem("token", token);
// }

// export function getToken() {
//     return localStorage.getItem("token");
// }

// export function removeToken() {
//     localStorage.removeItem("token");
// }

////토큰 정보 가져오기

const getToken = () => {
  const token = localStorage.getItem("token");;

  if (token) {
    return token;
  } else {
    return null;
  }
};

const saveToken = (token) => {
  if (!token) {
    return false;
  }
  localStorage.setItem("token", token);
};

const removeToken = () => {
  localStorage.removeItem("token");
};

//유저 닉네임 가져오기

const getNick = () => {
  const nickname = localStorage.getItem("nickname");

  if (nickname) {
    return nickname;
  } else {
    return null;
  }
};

const setNick = (nickname) => {
  if (!nickname) {
    return false;
  }
  localStorage.setItem("nickname", nickname);
};

const delNick = () => {
  localStorage.removeItem("nickname");
};

export { getToken, saveToken, removeToken, setNick, getNick, delNick };