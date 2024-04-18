import { Navbar } from "./Navbar";

export const Layout = ({ docs, children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
