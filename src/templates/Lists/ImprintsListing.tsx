import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { Section } from '../../layout/Section';

const ImprintsListing = () => (
  <Section
    title="Handsome Bones' Imprints"
    description="Handsome Bones publishes Business/Technology and Fantasy Content under our imprints."
  >
    <VerticalFeatureRow
      title="Be Better"
      description="The Be Better imprint covers technology and consulting materials designed to help readers become better at their craft."
      image="/assets/images/feature.svg"
      imageAlt="Be Better"
    />
    <VerticalFeatureRow
      title="Cat's Claw"
      description="The Cat's Claw imprint includes a collection of fantasy novels and other whimsy."
      image="/assets/images/feature2.svg"
      imageAlt="Cat's Claws Imprint"
      reverse
    />
  </Section>
);

export { ImprintsListing };
