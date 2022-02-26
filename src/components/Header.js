import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  // auth
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  // check auth

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setSession(user);
      }
    });
  }, []);

  // history
  const navigate = useNavigate();

  // login/logout

  const setSession = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        setSession(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg"></Logo>
      </Link>
      {!userName ? (
        <LoginButton onClick={signIn}>Login</LoginButton>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>

            <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>

            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>

            <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>

            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src={userPhoto} alt='Sign Out'></UserImg>
        </>
      )}
    </Nav>
  );
};

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      border-bottom: 3px solid transparent;
      margin-left: 0.5rem;

      &:hover {
        border-bottom: 3px solid white;
      }
    }
  }
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LoginButton = styled.button`
  margin-left: auto;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 0.25rem;

  &:hover {
    background-color: white;
    color: black;
  }
`;
