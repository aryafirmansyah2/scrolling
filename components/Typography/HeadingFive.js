import tw, { styled, css } from 'twin.macro';

const HeadingFive = styled.h5(({ isDemiBold, isMedium, isRegular }) => [
  tw`font-common  text-lg`,
  css`
    line-height: '19.8px';
  `,
  isDemiBold && tw`font-semibold`,
  isMedium && tw`font-medium`,
  isRegular && tw`font-normal`,
]);

export default HeadingFive;
