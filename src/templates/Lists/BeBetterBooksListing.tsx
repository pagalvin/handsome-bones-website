import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { Section } from '../../layout/Section';

const BeBetterBooksListing = () => (
  <Section
    title="Be Better's Books"
    description="Our current and up-coming books to help you master your craft."
  >
    <VerticalFeatureRow
      title="Yet Another Typescript Book"
      description="Helping the today's busy developers learn TypeScript fast."
      image="/assets/images/feature.svg"
      imageAlt="Yet Another TypeScript Book"
    />
    <VerticalFeatureRow
      title="So, You Want to be a Better Consultant"
      description="Learn what makes a good consultant a better (even best) consultant."
      image="/assets/images/feature2.svg"
      imageAlt="So, You want to be a Better Consultant"
      reverse
    />
  </Section>
);

export { BeBetterBooksListing };
