import { AnimateSharedLayout, motion } from "framer-motion";

export default function B() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <AnimateSharedLayout>
        <motion.div layout className="flex">
          <motion.div className="cursor-pointer rounded-l-xl border-y border-l p-2 hover:bg-base-200">
            Tab 1
          </motion.div>
          <motion.div className="cursor-pointer border-y border-t border-b p-2 hover:bg-base-200">
            Tab 2
          </motion.div>
          <motion.div className="cursor-pointer rounded-r-xl border-y border-r p-2 hover:bg-base-200">
            Tab 3
          </motion.div>
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
}
