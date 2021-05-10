import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';

const HeadingTwo = styled(motion.h2)(({ isCommon, isWoodland }) => [
  isCommon && [
    tw`font-normal text-2xl sm:text-5xl font-common`,
    css`
      line-height: '39.6px';
    `,
  ],
  isWoodland && [
    tw`font-bold text-3xl sm:text-6xl font-woodland`,
    css`
      line-height: '57.6px';
    `,
  ],
]);

export default HeadingTwo;
