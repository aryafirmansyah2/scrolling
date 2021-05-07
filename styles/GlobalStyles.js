import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 300;
    src: local('TT Commons Extra Light'), url(/fonts/common/TTCommons-ExtraLight.ttf);
  }
  ${'' /* Light untuk 400 */}
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 400;

    src: local('TT Commons Light'), url(/fonts/common/TTCommons-Light.ttf), url(/fonts/common/TTCommons-Light.woff);
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 500;
    src: local('TT Commons Regular'), url(/fonts/common/TTCommons-Regular.ttf), url(/fonts/common/TTCommons-Regular.woff);
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 600;
    src: local('TT Commons Medium'), url(/fonts/common/TTCommons-Medium.ttf), url(/fonts/common/TTCommons-Medium.woff);
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 700;
    src: local('TT Commons Bold'), url(/fonts/common/TTCommons-Bold.ttf), url(/fonts/common/TTCommons-Bold.woff);
  }
  @font-face {
    font-family: 'PP Woodland';
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/woodland/PPWoodland-Ultralight.otf);
    src: url(/fonts/woodland/PPWoodland-Ultralight.woff);
  }
  @font-face {
    font-family: 'PP Woodland';
    font-style: normal;
    font-weight: 600;
    src: url(/fonts/woodland/PPWoodland-Bold.otf);
    src: url(/fonts/woodland/PPWoodland-Bold.woff);
  }
  html,
  body,
  main {
    ${tw`overflow-x-hidden`}
  }
  body {
    font-family: 'TT Commons', 'sans-serif';
    ${tw`relative`}
  }
  main {
    scroll-snap-type: y mandatory;
    ${tw`overflow-y-auto`}
    flex: none;
    height: 100vh;
  }
  section {
    scroll-snap-align: start;
    flex: none;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
