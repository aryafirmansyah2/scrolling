import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';
const HeadingOne = styled(motion.h1)(({ isCommon, isWoodland }) => [
  isWoodland && [
    tw`font-bold text-5xl sm:text-8xl font-woodland`,
    css`
      line-height: '67.2px';
    `,
  ],
  isCommon && [
    tw`font-normal text-5xl sm:text-8.5xl font-common`,
    css`
      line-height: '66px';
    `,
  ],
]);

export default HeadingOne;
