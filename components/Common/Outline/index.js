import { styled, css } from 'twin.macro';

const Outline = styled.span`
  ${css`
    color: black;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  `}
`;
export default Outline;
