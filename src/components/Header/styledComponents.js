import styled from "styled-components";

export const HeaderStyle = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 84px;
`;

export const SideNavbarPopupMenuButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 28px;
  color: black;

  @media (max-width: 576px) {
    display: block;
  }

  @media (min-width: 577px) {
    display: none;
    margin-left: 10px;
  }
`;

export const HeaderHeading = styled.h1`
  color: #343c6a;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 40px;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-left: 25px;
  }

  @media (max-width: 576px) {
    margin-left: 0px;
  }
`;

export const AddTransactionButton = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: #2d60ff;
  margin-right: 40px;
  border: none;
  outline: none;
  cursor: pointer;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-right: 25px;
  }

  @media (max-width: 576px) {
    margin-right: 10px;
  }
`;

export const AddTransactionContext = styled.p`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PopupBackground = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
`;
