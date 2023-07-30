import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignout,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  let [logoutBtn, setLogoutBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const logout = () => {
    signOut(auth).then(() => {
      dispatch(setSignout());
      navigate("/login");
      logoutBtn = !logoutBtn;
      setLogoutBtn(logoutBtn);
    });
  };

  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <React.Fragment>
          <NavMenu>
            <a href="/">
              <img src="./images/home-icon.svg" />
              <span>Home</span>
            </a>
            <a href="#">
              <img src="./images/search-icon.svg" />
              <span>Search</span>
            </a>
            <a href="#">
              <img src="./images/watchlist-icon.svg" />
              <span>Watchlist</span>
            </a>
            <a href="#">
              <img src="./images/original-icon.svg" />
              <span>Originals</span>
            </a>
            <a href="#">
              <img src="./images/movie-icon.svg" />
              <span>Movies</span>
            </a>
            <a href="#">
              <img src="./images/series-icon.svg" />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImg
            src={userPhoto}
            onClick={() => {
              logoutBtn = !logoutBtn;
              setLogoutBtn(logoutBtn);
            }}
          />
          <Logout onClick={logout} show={logoutBtn}>
            Logout
          </Logout>
        </React.Fragment>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 20px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.button`
  border: solid 1px #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #f9f9f9;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 250ms ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.6);
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

const Logout = styled(Login)`
  position: absolute;
  right: 60px;
  top: 60px;
  z-index: 1;
  opacity: ${(props) => (props.show ? "1" : "0")};
  display: ${(props) => (props.show ? "block" : "none")};
`;

export default Header;
