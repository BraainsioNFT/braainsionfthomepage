import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
  src: string;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
};

export const NFTExplode: FC<Props> = ({
  src,
  x = 0,
  y = 0,
  scale = 1,
  rotate = 0,
}) => (
  <motion.div
    className="row-start-1 col-start-1  max-w-screen-md"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ amount: 1 }}
  >
    <motion.div
      className="w-full"
      variants={{
        offscreen: {
          x: 0,
          y: 0,
        },
        onscreen: {
          scale,
          x,
          y,
          rotate,
          transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1.2,
          },
        },
      }}
    >
      <motion.img src={src} className="w-full" />
    </motion.div>
  </motion.div>
);
