export const enum AnimationDefaultDuration {
  DEFAULT = 0.2,
  PRIMARY = 0.3,
  SECONDARY = 0.4,
  TERTIARY = 0.5,
}

export const animationDefaultVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const animationDefaultList = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const animationDefaultSelect = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

export const animationBurgerMenu = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { type: "tween", duration: AnimationDefaultDuration.DEFAULT },
};

export const animationSidebarMenu = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { type: "tween", duration: AnimationDefaultDuration.DEFAULT },
};
