import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 15.5rem;
    height: 6.4rem;
  }

  img {
    margin: 2.4rem 0;
    width: 12.7rem;
    height: 9.8rem;
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 7.8rem;

    button {
      margin: 0;
      width: 35.1rem;
      height: 8rem;

      font-weight: 600;
      font-size: 2rem;
      line-height: 3rem;
    }

    img {
      margin: 0;
      width: 23.7rem;
      height: 18.3rem;
    }
  }
`;
