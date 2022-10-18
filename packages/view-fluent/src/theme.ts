import { createTheme, IDropdownStyles, IStackTokens } from '@fluentui/react';

export const darkTheme = createTheme({
  palette: {
    themePrimary: '#60b1f0',
    themeLighterAlt: '#04070a',
    themeLighter: '#0f1c26',
    themeLight: '#1d3548',
    themeTertiary: '#3a6a90',
    themeSecondary: '#549cd3',
    themeDarkAlt: '#6fb9f1',
    themeDark: '#84c3f3',
    themeDarker: '#a4d3f6',
    neutralLighterAlt: '#3e3939',
    neutralLighter: '#464141',
    neutralLight: '#534d4d',
    neutralQuaternaryAlt: '#5b5555',
    neutralQuaternary: '#615b5b',
    neutralTertiaryAlt: '#7c7575',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralSecondaryAlt: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#363131',
  },
});

export const lightTheme = createTheme({
  palette: {
    themePrimary: '#1b7fcc',
    themeLighterAlt: '#f4f9fd',
    themeLighter: '#d4e8f7',
    themeLight: '#b1d5f0',
    themeTertiary: '#6baee0',
    themeSecondary: '#318cd2',
    themeDarkAlt: '#1872b8',
    themeDark: '#14619b',
    themeDarker: '#0f4772',
    neutralLighterAlt: '#ffffff',
    neutralLighter: '#ffffff',
    neutralLight: '#ffffff',
    neutralQuaternaryAlt: '#ffffff',
    neutralQuaternary: '#ffffff',
    neutralTertiaryAlt: '#ffffff',
    neutralTertiary: '#595653',
    neutralSecondary: '#373533',
    neutralSecondaryAlt: '#373533',
    neutralPrimaryAlt: '#2f2d2b',
    neutralPrimary: '#000000',
    neutralDark: '#151413',
    black: '#0b0a0a',
    white: '#ffffff',
  },
});

export const stackTokens: IStackTokens = { childrenGap: 40 };
export const buttonStackTokens: IStackTokens = { childrenGap: 20 };
export const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};
