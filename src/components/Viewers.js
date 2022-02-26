import React from "react";
import styled from "styled-components";

export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="view" />
      </Wrap>
    </Container>
  );
};

export const Container = styled.div`
  margin: 60px 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
`;

export const Wrap = styled.div`
  border: 3px solid rgb(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.63),
    0px 16px 10px -10px rgba(0, 0, 0, 0.73);

  transition: all 0.25s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgb(249, 249, 249, 0.8);
  }
`;
