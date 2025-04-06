import React, { HTMLAttributes, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  type Variants,
} from "framer-motion";
import classNames from "classnames";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface PropTypes extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  minValue?: number;
  maxValue?: number;
  value?: number;
  onChange?: (val: number) => void;
}
const animation: Variants = {
  hidden: (direction: -1 | 1) => ({
    y: direction === 1 ? 30 : -30,
    opacity: 0,
    filter: "blur(4px)",
  }),
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: -1 | 1) => ({
    y: direction === 1 ? -30 : 30,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

const Counter: React.FC<PropTypes> = ({
  minValue = 0,
  maxValue = 20,
  value,
  onChange,
  className,
}) => {
  const [num, setNum] = useState(value ?? 0);
  const [direction, setDirection] = useState(1);

  const [scope, animate] = useAnimate();

  const handleShake = () => {
    animate(scope.current, { x: [0, 5, -5, 0] }, { duration: 0.2 });
  };

  const counter = (action: "decrease" | "increase") => {
    if (action === "decrease") {
      if (num === minValue) return handleShake();
      setNum(num - 1);
      setDirection(-1);
      onChange?.(num - 1);
    } else if (action === "increase") {
      if (num === maxValue) return handleShake();
      setNum(num + 1);
      setDirection(1);
      onChange?.(num + 1);
    }
  };

  return (
    <div
      className={classNames(
        "size-full flex flex-col items-center justify-center gap-8",
        className
      )}
    >
      <div
        ref={scope}
        className="flex items-center justify-center gap-[10px] text-4xl"
      >
        <button
          onClick={() => counter("decrease")}
          className={classNames(
            "bg-box flex h-14 w-14 items-center justify-center rounded-full text-xl active:scale-90",
            { "opacity-50": num === 0 }
          )}
          type="button"
        >
          <FaMinus />
        </button>
        <h3 className="w-12 text-center">
          <AnimatePresence mode="popLayout" custom={direction}>
            {num
              .toString()
              .split("")
              .map((value, index) => (
                <motion.span
                  key={`${value} ${index}`}
                  variants={animation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={direction}
                  className="inline-block "
                >
                  {value}
                </motion.span>
              ))}
          </AnimatePresence>
        </h3>
        <button
          onClick={() => counter("increase")}
          className={classNames(
            "bg-box flex h-14 w-14 items-center justify-center rounded-full text-xl active:scale-90",
            { "opacity-50": num === 20 }
          )}
          type="button"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
