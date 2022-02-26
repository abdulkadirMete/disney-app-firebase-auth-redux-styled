import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImageSlider } from "./ImageSlider";
import { Movies } from "./Movies";
import { Viewers } from "./Viewers";
import { ref, child, get } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";

export const Home = () => {
  const dispatch = useDispatch();

  // get movies
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, `results`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(setMovies(snapshot.val()));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    z-index: -1;
  }
`;
