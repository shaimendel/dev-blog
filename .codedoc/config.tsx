
import { configuration } from '@codedoc/core';
import { theme } from './theme';

import { StaticRenderer } from '@connectv/sdh';    // --> import a static renderer for easily creating the script elements
import register from 'jsdom-global';               // --> also lets create a global document object for that purpose
const renderer = new StaticRenderer();             // --> initialize renderer
register();                                        // --> register global document object

export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  
  page: {
    title: {
      base: 'Shai Mendel\'s Dev Blog'                    // --> the base title of your doc pages
    },
    favicon: '/docs/assets/me.jpeg',
    scripts: [
      <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-165412736-1');
      `}</script>,
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165412736-1"></script>
    ]
  },
  dest: {
    namespace: '/dev-blog',
  },
});
