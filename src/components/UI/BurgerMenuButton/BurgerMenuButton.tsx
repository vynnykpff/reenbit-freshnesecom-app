import cn from "classnames";
import { SVGMotionProps, Transition, motion } from "framer-motion";
import styles from "./BurgerMenuButton.module.scss";

type Props = {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: number;
  transition?: Transition;
  lineProps?: SVGMotionProps<SVGLineElement>;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
} & SVGMotionProps<SVGSVGElement>;

const top = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: 45,
    translateY: 2,
  },
};
const center = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};
const bottom = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: -45,
    translateY: -2,
  },
};

export const BurgerMenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "var(--primary-c1-color-900)",
  transition = {},
  lineProps = {},
  className,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  return (
    <div className={cn(styles.burgerMenuButtonContainer, className)}>
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
      </motion.svg>
    </div>
  );
};
