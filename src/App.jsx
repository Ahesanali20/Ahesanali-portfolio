import ReduxProvider from "./providers/ReduxProvider";
import QueryProvider from "./providers/QueryProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <ReduxProvider>
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </ReduxProvider>
  );
};

export default App;
