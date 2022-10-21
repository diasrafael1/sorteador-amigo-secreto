import styled from "styled-components";

export const Button = styled.button`
  margin: 0 auto;
  background: rgba(254, 101, 43, 0.99);
  mix-blend-mode: normal;
  border: 1px solid #000000;
  box-shadow: 2px 2px 0px #000000;
  border-radius: 3.75rem;
  cursor: pointer;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  :disabled {
    background: #c4c4c4;
    color: #444444;
  }
`;
