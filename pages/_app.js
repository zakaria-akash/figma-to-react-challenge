import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";
import "@/styles/globals.css";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Component {...pageProps} />
      <MainFooter></MainFooter>
    </Fragment>
  );
}
