import React from "react";
import Head from "next/head";

interface ILayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Adrian Hernandez" />
        <meta name="description" content={`Información de pokemon ${title}`} />
        <meta name="keywords" content="pokemon,Adrian" />
      </Head>

      {/* navbar */}

      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;