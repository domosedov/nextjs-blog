import "../styles/index.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        title="Domosedov DEV"
        description="Личный сайт Александр Григорий"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
