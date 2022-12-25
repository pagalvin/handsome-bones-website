import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { Section } from '../../layout/Section';
import { BeBetterQuickLinks } from '../QuickLinks/BeBetterQuickLinks';

const BeBetterAuthorsListing = () => (
  <Section
    title="Be Better's Authors"
    description="Our current and up-coming books to help you master your craft."
    quickLinks={BeBetterQuickLinks}
  >
    <VerticalFeatureRow
      title="Paul Galvin"
      description="Paul's bio"
      image="/assets/images/feature.svg"
      imageAlt="What a handsome guy"
    />
    <VerticalFeatureRow
      title="Poornima Neelakandan"
      description="Poornima's bio"
      image="/assets/images/feature2.svg"
      imageAlt="What a smart cookie"
      reverse
    />
    <VerticalFeatureRow
      title="Tim Donato"
      description="Tim Donato's bio"
      image="/assets/images/feature2.svg"
      imageAlt="Not a bad consultant, not bad at all"
    />
  </Section>
);

export { BeBetterAuthorsListing };
