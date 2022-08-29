import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 320px) {
    margin-left: 30px;
  }

  div {
    position: relative;
    background-color: hsl(217, 19%, 24%);
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 15px;

    @media screen and (min-width: 800px) {
      width: 50%;
      padding: 30px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: hsl(150, 100%, 66%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;
      top: 25px;
      cursor: pointer;

      :hover {
        background-color: hsl(150, 100%, 70%);
        filter: drop-shadow(0 0 20px hsl(150, 100%, 70%));
      }

      @media screen and (min-width: 800px) {
        position: relative;
        top: 60px;
        width: 60px;
        height: 60px;
      }
    }
  }

  #advice-number {
    font-size: 12px;
    color: hsl(150, 100%, 66%);
    text-transform: uppercase;
    letter-spacing: 2px;

    @media screen and (min-width: 800px) {
     font-size: 16px;
    }
  }

  #advice {
    font-size: 28px;
    color: hsl(193, 38%, 86%);
    text-align: center;
  }

  #mobile-div {
    display: none;
    width: 95%;

    @media screen and (max-width: 769px) {
      display: block;
    }
  }

  #desktop-div {
    display: block;
    width: 95%;
    margin-top: 15px;

    @media screen and (max-width: 769px) {
      display: none;
    }
  }
`;
