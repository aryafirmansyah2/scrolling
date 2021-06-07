import Head from 'next/head';

export const INDEXED = 'index,follow';
export const NO_INDEXED = 'noindex,nofollow';

export function Metahead({ robots = INDEXED, title }) {
  return (
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
      <meta name="robots" content={robots} />
      <title>{title}</title>
      <meta name="description" content="We believe in the technology as a medium of outstanding interaction. It has the power to influence people in many ways, and that is the reason for our existence. Helping you grow, becoming expressing sincere digital experience." key="description" />

      <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo/favicon-16x16.png" />

      <meta name="theme-color" content="#EB2227" />
      <meta property="og:site_name" content="Inagata" />
      <meta key="og-image" property="og:image" content="/assets/logo/inagata-full.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="article:author" content={'inagata'} />
      <meta property="og:type" content="article" />
      <meta key="og-title" property="og:title" content="Inagata Technosmith" />
      <meta key="og-description" property="og:description" content="We believe in the technology as a medium of outstanding interaction. It has the power to influence people in many ways, and that is the reason for our existence. Helping you grow, becoming expressing sincere digital experience." />
      <meta key="og-url" property="og:url" content="inagata.com" />

      <meta key="tw-image" name="twitter:image" content="/assets/logo/inagata-full.png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="640" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta key="tw-title" name="twitter:title" content="Inagata Technosmith" />
      <meta key="tw-description" name="twitter:description" content="We believe in the technology as a medium of outstanding interaction. It has the power to influence people in many ways, and that is the reason for our existence. Helping you grow, becoming expressing sincere digital experience." />
      <meta key="tw-url" name="twitter:url" content="inagata.com" />
      <meta name="twitter:creator" content={'@inagata'} />
    </Head>
  );
}
