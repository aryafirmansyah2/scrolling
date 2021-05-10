const FadeInScale = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: [0.42, 0, 0.58, 1],
      duration: 0.6,
    },
  },
};

export default FadeInScale;
