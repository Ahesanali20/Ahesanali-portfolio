import ReduxProvider from "./providers/ReduxProvider";
import QueryProvider from "./providers/QueryProvider";
import AppRoutes from "./routes/AppRoutes";
import useTheme from "./hooks/useTheme";

const AppContent = () => {
  useTheme();

  return <AppRoutes />;
};

const App = () => {
  return (
    <ReduxProvider>
      <QueryProvider>
        <AppContent />
      </QueryProvider>
    </ReduxProvider>
  );
};

export default App;
