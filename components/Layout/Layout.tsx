import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Domosedov" }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
