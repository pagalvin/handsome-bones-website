import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { Section } from '../../layout/Section';

const CatsClawListing = () => (
  <Section
    title="Cat's Claw Imprint"
    description="Fantasy novels and other whimsy"
  >
    <VerticalFeatureRow
      title="Books"
      description="Cat's Claw Books"
      image="/assets/images/feature.svg"
      imageAlt="Cat's Claw Books"
    />
    <VerticalFeatureRow
      title="Short Stories"
      description="Short stories for your reading pleasure."
      image="/assets/images/feature2.svg"
      imageAlt="Short Stories"
      reverse
    />
    <VerticalFeatureRow
      title="Meet Our Authors"
      description="Learn about our Author and share your feedback with them."
      image="/assets/images/feature2.svg"
      imageAlt="Meet our Authors"
      reverse
    />
    <VerticalFeatureRow
      title="Speaking"
      description="We love to speak! We can share our writing experience with up-coming authors and other interested parties, free of charge."
      image="/assets/images/feature2.svg"
      imageAlt="Speaking"
      reverse
      leftAlignText
    />
  </Section>
);

export { CatsClawListing };
