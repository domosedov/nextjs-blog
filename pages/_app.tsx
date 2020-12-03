import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from "react";
import App, { AppContext } from "next/app";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { parseCookies, setCookie } from "nookies";
import "../styles/index.css";

import Layout from "../components/Layout/Layout";

type DarkModeStateContext = boolean;
type DarkModeDispatchContext = React.DispatchWithoutAction;

const DarkModeStateContext = createContext<DarkModeStateContext>(false);
const DarkModeDispatchContext = createContext<DarkModeDispatchContext | null>(
  null
);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const MyApp = ({
  Component,
  pageProps,
  darkModeEnabled,
}: AppProps & { darkModeEnabled: boolean }) => {
  const [darkMode, toggle] = useReducer((t) => !t, darkModeEnabled);

  useIsomorphicLayoutEffect(() => {
    if (darkMode) {
      setCookie(null, "theme", "dark", {
        maxAge: 2592000, // 30 Days
        path: "/",
      });
      document.querySelector("html")!.classList.add("dark");
    } else {
      setCookie(null, "theme", "light", {
        maxAge: 2592000, // 30 Days
        path: "/",
      });
      document.querySelector("html")!.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeDispatchContext.Provider value={toggle}>
      <DarkModeStateContext.Provider value={darkMode}>
        <Layout>
          <DefaultSeo
            title="Domosedov DEV"
            description="Личный сайт Александр Григорий"
          />
          <Component {...pageProps} />
        </Layout>
      </DarkModeStateContext.Provider>
    </DarkModeDispatchContext.Provider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const cookies = parseCookies(appContext.ctx);
  const darkModeEnabled = cookies.theme === "dark";
  return { ...appProps, darkModeEnabled };
};

export const useDarkMode = () => useContext(DarkModeStateContext);
export const useDarkModeToggle = () => useContext(DarkModeDispatchContext);

export default MyApp;
