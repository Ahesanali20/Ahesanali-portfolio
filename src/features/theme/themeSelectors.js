// TODO: Implement theme selectors.
export const selectTheme = (state) => state.theme.theme;

export const selectIsDark = (state) => state.theme.theme === "dark";
