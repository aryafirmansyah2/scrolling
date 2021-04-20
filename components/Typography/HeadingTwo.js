import tw, { styled, css } from 'twin.macro';

const HeadingTwo = styled.h2(({ isCommon, isWoodland }) => [
  isCommon && [
    tw`font-normal text-5xl font-common`,
    css`
      line-height: '39.6px';
    `,
  ],
  isWoodland && [
    tw`font-bold text-6xl font-woodland`,
    css`
      line-height: '57.6px';
    `,
  ],
]);

export default HeadingTwo;
