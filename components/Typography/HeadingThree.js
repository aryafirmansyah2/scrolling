import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';

const HeadingThree = styled(motion.h4)(({ isCommon, isCommonMedium, isCommonLight, isWoodland }) => [
  isCommon && [
    tw`font-normal text-2xl sm:text-4xl font-common`,
    css`
      line-height: '35.2px';
    `,
  ],
  isCommonMedium && [
    tw`font-medium text-lg sm:text-4xl font-common`,
    css`
      line-height: '35.2px';
    `,
  ],
  isCommonLight && [
    tw`font-light text-4xl font-common`,
    css`
      line-height: '35.2px';
    `,
  ],
  isWoodland && [
    tw`font-bold text-5.5xl font-woodland`,
    css`
      line-height: '48px';
    `,
  ],
]);

export default HeadingThree;
