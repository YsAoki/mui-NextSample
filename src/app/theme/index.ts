import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      small: string
      medium: string
      large: string
    }
  }
  interface ThemeOptions {
    customShadows?: {
      small?: string
      medium?: string
      large?: string
    }
  }
}

// グリーンベースのカスタムテーマ
export const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // 明るいグリーン
      contrastText: "#ffffff" // 白文字
    },
    secondary: {
      main: "#81c784", // サブ的な柔らかいグリーン
      contrastText: "#ffffff"
    },
    success: {
      main: "#388e3c" // 成功を示す緑
    },
    warning: {
      main: "#ffa726" // 警告はオレンジ系でアクセント
    },
    error: {
      main: "#e57373" // エラーは少し柔らかい赤
    },
    info: {
      main: "#4fc3f7" // 情報はブルー系
    },
    action: {
      active: "#000000",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(0, 0, 0, 0.12)"
    }
    // divider: 'rgba(0, 0, 0, 0.12)', // デフォルトの区切り線
    // background: {
    //   default: '#f1f8e9', // 明るいグリーン系の背景色
    //   paper: '#ffffff', // カードやモーダル用の背景色
    // },
    // text: {
    //   primary: '#2e7d32', // ダークグリーン系のテキスト
    //   secondary: '#558b2f', // 少し淡いグリーン
    //   disabled: 'rgba(46, 125, 50, 0.5)', // 半透明のダークグリーン
    // },
  },
  zIndex: {
    modal: 1300, // モーダルの z-index
    snackbar: 1400, // スナックバーの z-index
    tooltip: 1500, // ツールチップの z-index
    appBar: 1100, // アプリバーの z-index
    drawer: 1200 // ドロワーの z-index
  },
  customShadows: {
    small: "0px 1px 2px rgba(0, 0, 0, 0.2)", // 小さな影
    medium: "0px 3px 6px rgba(0, 0, 0, 0.16)", // 中程度の影
    large: "0px 10px 20px rgba(0, 0, 0, 0.15)" // 大きな影
  }
})
