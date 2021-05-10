import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';

const HeadingFour = styled(motion.h4)(({ isCommon, isWoodland }) => [
  isCommon && [
    tw`font-normal text-base sm:text-2xl font-common`,
    css`
      line-height: '26.4px';
    `,
  ],
  isWoodland && [
    tw`font-bold text-2xl sm:text-5xl font-woodland`,
    css`
      line-height: '43.2px';
    `,
  ],
]);

export default HeadingFour;
