import { LoaderProvider } from "./context/LoaderContext";
import Loader from "./products/Loader";
import ReduxProvider from "@/providers/ReduxProvider";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ReduxProvider>
      <LoaderProvider>
          <Loader />
          {children}
        </LoaderProvider>
        </ReduxProvider>
      


      </body>
    </html>
  );
}
