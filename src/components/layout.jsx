import { Header } from "./header";
import { Uploader } from "./uploader";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-4xl my-12 m-auto">{children}</main>
      <Uploader />
    </>
  );
};
