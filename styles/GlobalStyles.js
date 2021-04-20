import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 300;
    src: local('TT Commons Extra Light'),
      url(/fonts/common/TTCommons-ExtraLight.ttf);
  }
  ${'' /* Light untuk 400 */}
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 400;

    src: local('TT Commons Light'), url(/fonts/common/TTCommons-Light.ttf);
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 500;
    src: local('TT Commons Regular'), url(/fonts/common/TTCommons-Regular.ttf);
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 600;
    src: local('TT Commons Medium'), url(/fonts/common/TTCommons-Medium.ttf);
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 700;
    src: local('TT Commons Bold'), url(/fonts/common/TTCommons-Bold.ttf);
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
  body {
    font-family: 'TT Commons', 'sans-serif';
  }
  main {
    scroll-snap-type: y mandatory;
    overflow: auto;
  }
  section {
    scroll-snap-align: start;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
