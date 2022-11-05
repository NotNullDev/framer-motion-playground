import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex gap-3 p-4">
      <button className="btn-ghost btn" onClick={() => router.push("/")}>
        Page 1
      </button>
      <button className="btn-ghost btn" onClick={() => router.push("/a")}>
        Page 2
      </button>
      <button className="btn-ghost btn" onClick={() => router.push("/b")}>
        Page 3
      </button>
    </div>
  );
};

export default MyApp;
