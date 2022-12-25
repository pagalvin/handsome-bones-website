import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { Section } from '../../layout/Section';
import { WebSitePaths } from '../../utils/WebSitePaths';
import { BeBetterQuickLinks } from '../QuickLinks/BeBetterQuickLinks';

const BeBetterListing = () => (
  <Section
    title="Be Better"
    description="Technology and consulting books and other materials to help you improve your craft."
    quickLinks={BeBetterQuickLinks}
  >
    <VerticalFeatureRow
      title="Books"
      description="Be Better's Books"
      image="/assets/images/feature.svg"
      imageAlt="Be Better's Books"
      linkToHref={WebSitePaths.beBetterBooks}
    />
    <VerticalFeatureRow
      title="Meet Our Authors"
      description="Learn about our Author and share your feedback with them."
      image="/assets/images/feature2.svg"
      imageAlt="Meet our Authors"
      reverse
      linkToHref={WebSitePaths.beBetterAuthors}
    />
    <VerticalFeatureRow
      title="Speaking"
      description="We love to speak! We love to speak at user groups, conferences or even one-on-one and free of charge. Contact us if you'd like us or our authors to speak at your user group, code camp or other gathering. We will connect you with the right people to make it happen."
      image="/assets/images/feature2.svg"
      imageAlt="Speaking"
      reverse
    />
  </Section>
);

export { BeBetterListing };
