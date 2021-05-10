import tw, { styled, css } from 'twin.macro';
import { motion } from 'framer-motion';

const TextBody = styled(motion.p)(({ isLgDemiBold, isLgRegular, isLgLight, isNormalLight, isNormal }) => [
  tw`font-common `,
  isLgDemiBold && tw`font-semibold text-8xl `,
  isLgRegular && tw`text-8xl `,
  isLgLight && tw`text-4xl sm:text-8xl  font-light`,
  isNormalLight && tw`text-2.5xl font-light`,
  isNormal && tw`text-sm sm:text-base lg:text-2xl`,
]);

export default TextBody;
