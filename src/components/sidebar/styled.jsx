import styled, { css } from "styled-components";
import SidebarBg from "../../images/bg-sidebar-desktop.svg";

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: url(${SidebarBg});
  position: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70%;

  color: white;
  padding: 24px;
  width: 40%;
  border-radius: 8px;
`;
export const ItemNumber = styled.span`
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${ItemNumber} {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--Magnolia);
        color: var(--Marine-blue);
        border-color: var(--Magnolia);
      `}
  }
`;

export const ItemBody = styled.div``;

export const Subtitle = styled.h5`
  opacity: 0.75;

  font-size: 13px;
`;

export const Title = styled.h2`
  font-weight: 500;
`;
