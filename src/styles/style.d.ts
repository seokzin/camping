import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: {
      mainColor: string;
      subColor: string;
      title: string;
      mainText: string;
      subText: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeight: {
      black: number;
      bold: number;
      semiBold: number;
      regular: number;
    };
  }
}
