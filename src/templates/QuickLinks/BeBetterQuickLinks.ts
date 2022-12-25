import { QuickLinks } from '../../layout/Section';
import { WebSitePaths } from '../../utils/WebSitePaths';

const BeBetterQuickLinks: QuickLinks = {
  quickLinksLabel: "Be Better's Quick Links:",
  labelLinkPairs: [
    {
      linkLabel: 'Books',
      linkHRef: WebSitePaths.beBetterBooks,
    },
    {
      linkLabel: 'Authors',
      linkHRef: WebSitePaths.beBetterAuthors,
    },
    {
      linkLabel: 'Speaking',
      linkHRef: WebSitePaths.beBetterSpeaking,
    },
  ],
};

export { BeBetterQuickLinks };
