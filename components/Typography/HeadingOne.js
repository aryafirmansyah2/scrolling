import tw, { styled, css } from 'twin.macro';

const HeadingOne = styled.h1(({ isCommon, isWoodland }) => [
  isWoodland && [
    tw`font-bold text-8xl font-woodland`,
    css`
      line-height: '67.2px';
    `,
  ],
  isCommon && [
    tw`font-normal text-8.5xl font-common`,
    css`
      line-height: '66px';
    `,
  ],
]);

export default HeadingOne;
