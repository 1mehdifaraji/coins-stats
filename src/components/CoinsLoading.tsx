import { FC } from "react";
import { motion } from "framer-motion";
import Skeleton from "./common/Skeleton";

const CoinsLoading: FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.65, ease: "easeInOut" }}
    exit={{ opacity: 0 }}
    className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800"
  >
    <div>
      <div className="flex items-center space-x-5 w-60">
        <Skeleton className="w-7 h-5" />
        <Skeleton className="w-24 h-5" />
      </div>
    </div>
    <div className="w-full flex items-center justify-between">
      <Skeleton className="w-12 h-5" />
      <Skeleton className="w-20 h-5" />
    </div>
  </motion.div>
);

export default CoinsLoading;
