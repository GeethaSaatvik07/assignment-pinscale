import styled from "styled-components";

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DashboardWithHeader = styled.div`
  width: 82.64%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  padding: 15px;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 576px) {
    padding: 7px;
  }
`;

export const CreditAndDebitContainer = styled.div`
  display: flex;
  align-items: center;
  //   flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
