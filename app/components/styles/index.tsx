"use client";

import styled from "styled-components";

export const Text = styled.span`
  background: linear-gradient(249deg, #2878ff 1.31%, #2c65c8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  leading-trim: both;
  text-edge: cap;
  font-family: "Plus Jakarta Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;


export const ButtonBlue = styled.button<{
  $width: string | number;
  $height: string | number;
}>`
  width: ${(props) => (props.$width ? props.$width : "auto")};
  min-height: ${(props) => (props.$height ? props.$height : "auto")};
  border-radius: 8px;
  background: var(
    --Primary-05,
    linear-gradient(249deg, #2878ff 1.31%, #2c65c8 100%)
  );
  color:white;
  display:inline-flex;
  text-align:center;
  justify-content:center;
  align-items:center;
`;