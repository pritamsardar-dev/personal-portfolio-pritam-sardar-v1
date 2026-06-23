import AppProviders from "./providers/AppProviders";
import AppRoutes from "./routes/AppRoutes";
import AdminEditorContainer from "./modules/admin/AdminEditorContainer";

function App() {
  return (
    <AppProviders>
      <AdminEditorContainer />
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
