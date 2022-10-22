import styled from "styled-components";
import arrow from "../../../../assets/arrow_drop_down.svg";
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;
  padding: 0 3rem;

  select {
    width: 32.8rem;
    height: 4.8rem;
    padding: 1.6rem 2.9rem;
    background: #ffffff;
    mix-blend-mode: normal;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #111111;
    border-radius: 3.2rem;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(${arrow}) no-repeat 95.5% 50% #fff;
  }
  span {
    text-align: center;
    margin: 3.2rem 0 2.1rem;
  }

  button {
    width: 15.5rem;
    height: 5.9rem;
    border: 2px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;

    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
  }

  @media (min-width: 1024px) {
    select {
      width: 47.6rem;
      height: 7.5rem;
    }

    button {
      width: 22.7rem;
      height: 8rem;
    }
  }
`;
