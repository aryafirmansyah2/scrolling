import tw, { styled, css } from 'twin.macro';

const HeadingThree = styled.h4(
  ({ isCommon, isCommonMedium, isCommonLight, isWoodland }) => [
    isCommon && [
      tw`font-normal text-4xl font-common`,
      css`
        line-height: '35.2px';
      `,
    ],
    isCommonMedium && [
      tw`font-medium text-4xl font-common`,
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
  ],
);

export default HeadingThree;
