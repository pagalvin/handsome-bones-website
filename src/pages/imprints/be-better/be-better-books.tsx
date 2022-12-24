import { Base2 } from '../../../templates/Base2';
import { BeBetterBooksListing } from '../../../templates/Lists/BeBetterBooksListing';

const beBetterBooksListing: () => JSX.Element = () => {
  return <BeBetterBooksListing />;
};

const BeBetterBooksListingPage = () => (
  <Base2 contentFunc={beBetterBooksListing} />
);

export default BeBetterBooksListingPage;
