"use client"
import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

const HEADER_HEIGHT = "2.5rem";

export const SAppHeader = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  height: ${HEADER_HEIGHT};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const SInner = styled.div`
  padding: 0.5rem 0;
  margin: 0 auto;
  width: 95%;
`;

export const SFlexBox = styled.div`
  display: flex;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
