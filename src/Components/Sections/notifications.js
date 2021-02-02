import { motion } from "framer-motion";
import pageVariants from "./pageVariants";
import pageTransition from "./pageTransition";

const Notifications = () => {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      notifications
    </motion.div>
  );
};

export default Notifications;
