import { css } from 'styled-components';
import theme from 'styled-theming';

// hover -- card
export const grayHover = theme('mode', {
  light: css`
    &:hover {
      background-color: rgba(230, 236, 240, 0.7);
    }
  `,
  dark: css`
    &:hover {
      background-color: rgb(24, 36,48);
    }
  `,
});
// border-bottom
export const grayBorderBottom = theme('mode', {
  light: css`
    border-bottom: 1px solid rgb(230, 236, 240);
  `,
  dark: css`
    border-bottom: 1px solid rgb(56, 68, 77);
  `,
});
export const grayBorderTop = theme('mode', {
  light: css`
    border-top: 1px solid rgb(230, 236, 240);
  `,
  dark: css`
    border-top: 1px solid rgb(56, 68, 77);
  `,
});

// background-color
export const lightBlueBackground = theme('mode', {
  light: css`
    background-color: rgb(230, 236, 240);
  `,
  dark: css`
    background-color: rgb(16, 23, 30);
  `,
});
export const lighterBlueBackground = theme('mode', {
  light: css`
    background-color: rgb(245, 248, 250);
  `,
  dark: css`
    background-color: rgb(24, 36, 48);
  `,
});
export const whiteBackground = theme('mode', {
  light: css`
    background-color: rgb(255, 255, 255);
  `,
  dark: css`
    background-color: rgb(28, 41, 56);
  `,
});

export const blueBorderColor = theme('mode', {
  light: css`
    border-color: rgb(29, 161, 242);
  `,
  dark: css`
    border-color: rgba(16, 23, 30);
  `,
});
export const transparentBorderColor = theme('mode', {
  light: css`
    border-color: rgb(0, 0, 0);
  `,
  dark: css`
    border-color: rgba(16, 23, 30);
  `,
});
export const darkColor = theme('mode', {
  light: css`
    color: rgb(20, 23, 26);
  `,
  dark: css`
    color: rgb(255, 255, 255);
  `,
});
