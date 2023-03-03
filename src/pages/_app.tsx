import { Layout } from "@/components/Layout/Layout";
import { DialogProvider } from "@/hooks/DialogContext";
import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <DialogProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DialogProvider>
    </>
  );
}
