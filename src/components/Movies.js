import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectMovies } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";

const END_POINT = "https://image.tmdb.org/t/p/w1280/";

export const Movies = () => {
  const movies = useSelector(selectMovies);
  console.log(movies);
  return (
    <Container>
      <h3>Recommended for you </h3>
      <Content>
        {movies.map((movie, index) => {
          return (
            <Link key={movie.id} to={`/detail/${index}`}>
              <Wrap>
                <img
                  src={`${END_POINT}${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <span className="name">{movie.title}</span>
              </Wrap>
            </Link>
          );
        })}
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  padding: 70px 0;
  h3 {
    font-size: 1.4rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

export const Wrap = styled.div`
  border-radius: 10px;
  height: 200px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.63),
    0px 16px 10px -10px rgba(0, 0, 0, 0.73);

  transition: 0.25s linear all;
  &:hover {
    transform: scale(1.05);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0, 0.6);
    }

    .name {
      display: block;
    }
  }

  .name {
    color: white;
    position: absolute;
    font-size: 1.4em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
