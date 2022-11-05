import { AnimatePresence, motion } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="b flex h-screen w-screen flex-col">
        <Toaster position="bottom-left" />
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-1 flex-col"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex gap-3 p-4">
      <button className="btn-ghost btn" onClick={() => router.push("/")}>
        List
      </button>
      <button
        className="btn-ghost btn"
        onClick={() => router.push("/draganddrop")}
      >
        Drag and drop
      </button>
      <button className="btn-ghost btn" onClick={() => router.push("/tabs")}>
        Tabs
      </button>
    </div>
  );
};

export default MyApp;
