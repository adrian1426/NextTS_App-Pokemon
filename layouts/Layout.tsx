import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/ui";

interface ILayoutProps {
  title?: string;
  children: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

const Layout = (props: ILayoutProps) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Adrian Hernandez" />
        <meta name="description" content={`Información de pokemon ${title}`} />
        <meta name="keywords" content="pokemon,Adrian" />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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