import React, { ReactNode } from "react";

import "../styles/styles.scss";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fr">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default layout;
