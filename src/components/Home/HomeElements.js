import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 1em;
  height: auto;
  min-height: 100vh;
  padding: 0rem calc((100vw - 1200px) / 2);
`;

export const ImageInputForm = styled.form`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 2px solid black;
  width: 50vw;
  height: 5vh;
  border-right: none;
  padding: 0 1rem;
  outline: none;
  border-radius: 5px 0 0 5px;
`;

export const SubmitBtn = styled.button`
  border: 2px solid black;
  width: 5vw;
  height: 5vh;
  border-left: none;
  border-radius: 0 5px 5px 0px;

  @media screen and (max-width: 500px) {
    width: 15vw;
  }
  @media screen and (max-width: 1200px) {
    width: 15vw;
  }
`;
