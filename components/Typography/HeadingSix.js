import tw, { styled, css } from 'twin.macro';

const HeadingSix = styled.h6(({ isDemiBold, isMedium, isRegular }) => [
  tw`font-common  text-lg`,
  css`
    font-size: '0.938rem';
    line-height: '19.8px';
  `,
  isDemiBold && tw`font-semibold`,
  isMedium && tw`font-medium`,
  isRegular && tw`font-normal`,
]);

export default HeadingSix;
