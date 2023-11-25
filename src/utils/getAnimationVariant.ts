type Params = {
  initial: object;
  animate: object;
  exit: object;
  duration: number;
};

const DEFAULT_TRANSITION_TYPE = "tween";

export const getAnimationVariant = ({ initial, animate, exit, duration }: Params) => {
  return {
    initial,
    animate,
    exit,
    transition: { type: DEFAULT_TRANSITION_TYPE, duration },
  };
};
