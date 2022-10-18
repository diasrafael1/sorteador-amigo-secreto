import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3.7rem;

  input {
    width: 32.8rem;
    height: 4.8rem;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 37.5px;
    padding: 2.6rem;
    margin-bottom: 0.8rem;

    :focus {
      outline: 0;
    }
  }

  button {
    width: 15.5rem;
    height: 4.8rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      width: 50rem;
      height: 8.2rem;
      border: 2px solid #000000;
      box-shadow: 4px 4px 0px #000000;
    }

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      width: 22.7rem;
      height: 8.2rem;
      box-shadow: 4px 4px 0px #000000;
    }
  }
`;
