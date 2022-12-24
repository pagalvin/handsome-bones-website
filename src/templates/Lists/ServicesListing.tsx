import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { Section } from '../../layout/Section';

const ServicesListing = () => (
  <Section
    title="Handsome Bones' Services"
    description="Handsome Bones are happy to help you in your writing journey! We can assist as follows, free of charge:"
  >
    <VerticalFeatureRow
      title="Self Publishing Guidance"
      description="Help you self publish your novel, book, etc."
      image="/assets/images/feature.svg"
      imageAlt="Be Better"
    />
    <VerticalFeatureRow
      title="Reading - Alpha and Beta"
      description="We love to read! Ask us to read your book or novel and will provide alpha and beta-level feedback as per your request."
      image="/assets/images/feature2.svg"
      imageAlt="Cat's Claws Imprint"
      reverse
    />
  </Section>
);

export { ServicesListing };
