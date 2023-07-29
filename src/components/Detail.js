import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2020/08/best-simpsons-episodes.jpg" />
      </Background>
      <ImageTitle>
        <img src="./images/viewers-pixar.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 7m Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        pariatur aspernatur, nemo iure veniam nesciunt dolorem ab deleniti
        impedit dolore voluptas, maiores sapiente perferendis magni commodi
        dignissimos ea ad. Autem?
      </Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 24px;
  cursor: pointer;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  margin-right: 22px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgb(0, 0, 0, 0.3);
  border: solid 1px rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #fff;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: #fff;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;

export default Detail;
