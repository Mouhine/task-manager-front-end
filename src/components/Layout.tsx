import React from "react";
import Modale from "./modals/Modale";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Modale />
      {children}
    </div>
  );
};

export default Layout;
