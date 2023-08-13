import styled from "styled-components";

export const ProfilePage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileWithHeader = styled.div`
  width: 82.64%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  padding: 15px;
  padding-bottom: 30px;
  scrollbar-width: none;

  @media (max-width: 576px) {
    padding: 7px;
  }
`;

export const ProfileCard = styled.div`
  width: 100%;
  height: 584px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 50%;
  margin-top: 48px;
  margin-left: 20px;
  margin-right: 48px;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-right: 18px;
  }

  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-right: 7px;
  }
`;
