import "@emotion/react";
import { Theme as MuiTheme } from "@mui/material/styles";

// Emotion の Theme 型を MUI の Theme 型に拡張
declare module "@emotion/react" {
  export interface Theme extends MuiTheme {}
}
w