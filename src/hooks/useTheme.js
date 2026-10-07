// TODO: Implement the theme hook.
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/theme/themeSelectors";

const useTheme = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return theme;
};

export default useTheme;
