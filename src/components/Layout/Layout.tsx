import React, {PropsWithChildren} from 'react';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
     <header>
       HEADER
     </header>
      <main>
        MAIN
      </main>
      <footer>
        FOOTER
      </footer>
    </>
  );
};

export default Layout;