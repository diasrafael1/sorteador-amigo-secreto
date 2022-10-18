import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logoSmall {
    width: 18.6rem;
    height: 15.7rem;
    margin-bottom: 30%;
  }
  .person {
    position: absolute;
    bottom: -2.1rem;
    width: 31rem;
  }

  .logo {
    display: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-left: 9%;
    justify-content: left;

    .logoSmall {
      display: none;
    }
    .logo {
      display: block;
    }
    .person {
      position: absolute;
      bottom: -3.3rem;
      right: 9%;
      width: 45rem;
    }
  }
`;
