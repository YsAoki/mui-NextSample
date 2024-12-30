"use client";

import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

type Props = ButtonProps;

/**背景色が塗りつぶされているボタン */
const CButtonContained: FC<Props> = ({ children, ...other }) => {
  return (
    <Button variant="contained" {...other}>
      {children}
    </Button>
  );
};

export default CButtonContained;
