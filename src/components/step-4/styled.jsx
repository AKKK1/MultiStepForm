import styled, { css } from "styled-components";

const rowCommonCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Step4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h4`
  color: var(--Cool-gray);
`;

export const MainRow = styled.div`
  ${rowCommonCss}
  background-color: var(--Magnolia);
  padding: 24px;

  ${Title} {
    color: var(--Marine-blue);
    font-weight: 500;
  }
`;

export const SubRow = styled.div`
  ${rowCommonCss}
  padding: 0 24px;
`;

export const TotalRow = styled.div`
  ${rowCommonCss}
  padding: 24px 24px 0;
  border-top: 1px solid var(--Light-gray);
`;

export const Price = styled.h6``;

export const TotalAmount = styled.h3`
  color: var(--Purplish-blue);
  font-size: 18px;
  font-weight: 700;
`;
