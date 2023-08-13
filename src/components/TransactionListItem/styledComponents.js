import styled from "styled-components";

export const TransactionItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 15px;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-left: 8px;
  }

  @media (max-width: 576px) {
    margin-left: 0px;
  }
`;

export const CreditDebitSymbolAndName = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 576px) {
    width: 20%;
  }
`;

export const TransactionName = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 16px;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-left: 10px;
  }

  @media (max-width: 576px) {
    margin-left: 4px;
  }
`;

export const CategoryDateAmount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 65%;
    margin-right: 10px;
    justify-content: space-between;
  }

  @media (max-width: 576px) {
    width: 65%;
    margin-right: 8px;
    justify-content: space-between;
  }
`;

export const TransactionCategory = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 80px;

  //   @media (min-width: 576px) and (max-width: 768px) {
  //     width: 70px;
  //   }
`;

export const TransactionDate = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 150px;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 140px;
    margin-left: -10px;
  }

  @media (max-width: 576px) {
    width: 90px;
    margin-left: 30px;
  }
`;

export const TransactionDebitAmount = styled.p`
  color: #fe5c73;
  text-align: right;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80px;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 70px;
    margin-left: -40px;
  }

  @media (max-width: 576px) {
    margin-left: -25px;
    width: 50px;
  }
`;

export const TransactionCreditAmount = styled(TransactionDebitAmount)`
  color: #16dbaa;
`;

export const TransactionEditAndDelete = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-right: 10px;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-right: 6px;
  }

  @media (max-width: 576px) {
    margin-right: 0px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-left: 10px;

  @media (min-width: 576px) and (max-width: 768px) {
    margin-left: 6px;
  }

  @media (max-width: 576px) {
    margin-left: 0px;
  }
`;

export const PopupBackground = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
