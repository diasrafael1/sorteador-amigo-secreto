import styled from "styled-components";

export const CardContainer = styled.section`
  background: #fff9eb;
  border: 1px solid #000000;
  border-radius: 48px 48px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
    color: rgba(75, 105, 253, 0.99);

    @media (min-width: 1024px) {
      font-size: 3.2rem;
      line-height: 4.8rem;
    }
  }
`;
