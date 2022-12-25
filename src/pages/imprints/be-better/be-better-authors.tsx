import { Base2 } from '../../../templates/Base2';
import { BeBetterAuthorsListing } from '../../../templates/Lists/BeBetterAuthorsListing';

const beBetterAuthorsListing: () => JSX.Element = () => {
  return <BeBetterAuthorsListing />;
};

const BeBetterAuthorsListingPage = () => (
  <Base2 contentFunc={beBetterAuthorsListing} />
);

export default BeBetterAuthorsListingPage;
