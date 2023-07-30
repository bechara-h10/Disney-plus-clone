import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            if (movie.type === "recommend")
              return (
                <Wrap key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img src={movie.cardImg} />
                  </Link>
                </Wrap>
              );
          })}
      </Content>
      <h4>Original</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            if (movie.type === "original")
              return (
                <Wrap key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img src={movie.cardImg} />
                  </Link>
                </Wrap>
              );
          })}
      </Content>
      <h4>New</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            if (movie.type === "new")
              return (
                <Wrap key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img src={movie.cardImg} />
                  </Link>
                </Wrap>
              );
          })}
      </Content>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            if (movie.type === "trending")
              return (
                <Wrap key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img src={movie.cardImg} />
                  </Link>
                </Wrap>
              );
          })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (width <= 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
  }
`;

export default Movies;
