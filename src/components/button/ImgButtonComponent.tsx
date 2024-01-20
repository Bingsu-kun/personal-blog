import { motion } from "framer-motion";

const ImgButtonComponent = (props: {
  imgSource?: string;
  imgLink?: string;
  classNameStr?: string;
  isHover?: boolean;
}) => {
  if (!props.isHover) {
    props.isHover = false;
  }

  return props.isHover ? (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <a href={props.imgLink} className={props.classNameStr}>
        <img src={props.imgSource} />
      </a>
    </motion.div>
  ) : (
    <a href={props.imgLink} className={props.classNameStr}>
      <img src={props.imgSource} />
    </a>
  );
};

export default ImgButtonComponent;
