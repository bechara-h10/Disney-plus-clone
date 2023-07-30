import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebaseConfig";
import { collection, getDocs, getDoc, doc, query } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

async function getMovies(dispatch) {
  const moviesCol = collection(db, "movies");
  const moviesSnapshot = await getDocs(moviesCol);
  let tempMovies = moviesSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  dispatch(setMovies(tempMovies));
}

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies(dispatch);
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  &:before {
    content: "";
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default Home;
