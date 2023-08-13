import styled from "styled-components";

export const Sidebar = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  background: #fff;
  flex-shrink: 0;
  display flex;
  flex-direction: column;
  align-items: center;
`;

export const NameAndLogo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  margin-left: 20px;
  margin-top: 31px;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-left: 50px;
  }
`;

export const CompanyName = styled.p`
  color: #f89a23;
  font-family: Poppins;
  font-size: 19.66px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
`;

export const CompanyNameMatters = styled.span`
  color: #02969c;

  @media (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
`;

export const CompanyPageNavigation = styled.div`
  width: 207px;
  height: 171px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
