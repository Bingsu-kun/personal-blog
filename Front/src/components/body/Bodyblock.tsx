import { motion } from "framer-motion";

function Block(props: { blockId: string; isHover?: boolean }) {
  const id: string = "block-" + `${props.blockId}`;

  return props?.isHover ? (
    <motion.div
      id={id}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="shadow-xl rounded-xl bg-[var(--dark-block-bg)] justify-center items-center border border-white border-opacity-[.08] my-10 px-10 py-5 hover:bg-[#384264]"
    ></motion.div>
  ) : (
    <div
      id={id}
      className="shadow-xl rounded-xl bg-[var(--dark-block-bg)] justify-center items-center border border-white border-opacity-[.08] my-10 px-10 py-5"
    ></div>
  );
}

export default Block;
