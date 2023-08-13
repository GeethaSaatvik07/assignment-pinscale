import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  margin-top: 48px;
  margin-left: 20px;
  overflow-x: hidden;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
