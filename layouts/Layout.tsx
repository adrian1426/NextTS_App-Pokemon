import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/ui";

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

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  );
};

export default Layout;