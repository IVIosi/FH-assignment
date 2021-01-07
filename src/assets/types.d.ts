import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    defaultSpacing: number;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      secondary: string;
      text: {
        primary: string;
        secondary: string;
      };
      background: {
        default: string;
        box: string;
      };
    };
    spacing: (step: number) => number;
    fade: (color: string, alpha: number) => string;
  }
}
