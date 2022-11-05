import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

export default function B() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mt-10 flex w-full flex-1 flex-col items-center justify-center overflow-hidden">
      <div className="flex w-[200px] flex-col">
        <AnimateSharedLayout>
          <motion.div layout className="flex flex-1">
            <motion.div
              className="relative w-full cursor-pointer select-none whitespace-nowrap rounded-l-xl border-y border-l border-none p-2"
              onClick={() => setSelected(0)}
            >
              <div>Tab 1</div>
              {selected === 0 && (
                <motion.div
                  className="absolute top-0 left-0 h-[1px] h-full w-full w-full rounded-xl bg-indigo-600 bg-opacity-20"
                  layoutId="tab-underline"
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
            <motion.div
              className="relative w-full cursor-pointer select-none whitespace-nowrap border-y border-t border-b border-none p-2"
              onClick={() => setSelected(1)}
            >
              <div>Tab 2</div>
              {selected === 1 && (
                <motion.div
                  className="absolute top-0 left-0 h-[1px] h-full w-full w-full rounded-xl bg-indigo-600 bg-opacity-20"
                  layoutId="tab-underline"
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
            <motion.div
              className="relative w-full cursor-pointer select-none whitespace-nowrap rounded-r-xl border-y border-r border-none p-2"
              onClick={() => setSelected(2)}
            >
              <div>Tab 3</div>
              {selected === 2 && (
                <motion.div
                  className="absolute top-0 left-0 h-[1px] h-full w-full w-full rounded-xl bg-indigo-600 bg-opacity-20"
                  layoutId="tab-underline"
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          </motion.div>
        </AnimateSharedLayout>
        <div className="flex w-[200px] overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={selected}
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0, width: "0%" }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {selected === 0 && <Content1 />}
              {selected === 1 && <Content2 />}
              {selected === 2 && <Content3 />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export const Content1 = () => {
  return (
    <motion.div className="w-[200px] flex-1 whitespace-nowrap bg-base-200 p-2">
      Content 1
    </motion.div>
  );
};

export const Content2 = () => {
  return (
    <motion.div className="w-[200px] flex-1 whitespace-nowrap bg-base-200 p-2">
      Content 2
    </motion.div>
  );
};

export const Content3 = () => {
  return (
    <motion.div className="w-[200px] flex-1 whitespace-nowrap bg-base-200 p-2">
      Content 3
    </motion.div>
  );
};
