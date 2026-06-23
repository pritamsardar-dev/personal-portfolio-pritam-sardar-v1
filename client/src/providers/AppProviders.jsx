import ModalProvider from "./ModalProvider";
import RefsProvider from "./RefsProvider";
import { AdminEditorProvider } from "./AdminEditorProvider";
import { AuthProvider } from "./AuthProvider";
import { SectionNavProvider } from "./SectionNavProvider";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <AdminEditorProvider>
        <RefsProvider>
          <SectionNavProvider>
            <ModalProvider>{children}</ModalProvider>
          </SectionNavProvider>
        </RefsProvider>
      </AdminEditorProvider>
    </AuthProvider>
  );
};

export default AppProviders;