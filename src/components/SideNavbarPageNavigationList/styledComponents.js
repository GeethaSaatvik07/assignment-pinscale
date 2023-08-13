import styled from "styled-components";

export const PageNavigation = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 26px;
  list-style-type: none;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  color: none;
`;

export const ActivePageNavigation = styled.li`
  display: flex;
  width: 189px;
  height: 60px;
  justify-content: center;
  align-items: center;
  //   gap: 26px;
  flex-shrink: 0;
  color: var(--primary-3, #2d60ff);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  color: none;
  margin-bottom: 20px;
  border-left: 6px solid var(--primary-3, #2d60ff);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 50px;
  list-style-type: none;

  @media (max-width: 576px) {
    margin-left: -55px;
  }
`;

export const PageName = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: none;
  color: none;

  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
`;

export const PageActiveIcon = styled.div`
  margin-left: 38px;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-left: -65px;
  }
`;

export const PageIcon = styled.div`
  margin-left: 50px;
`;
