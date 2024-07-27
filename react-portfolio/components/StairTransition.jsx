"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
        >
          <Stairs />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;


// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// //components
// import Stairs from "./Stairs";

// const StairTransition = () => {
//   const pathname = usePathname();
//   return (
//     <>
//       <AnimatePresence mode="wait">
//         <div key={pathname}>
//           <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-event-none z-40 flex">
//             <Stairs />
//           </div>

// <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" initial={{opacity: 1}} animate={{opacity: 0,
//   transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
// }} />

//         </div>
//       </AnimatePresence>
//     </>
//   );
// };

// export default StairTransition;
