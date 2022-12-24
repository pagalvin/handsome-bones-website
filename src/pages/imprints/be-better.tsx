import { Base2 } from '../../templates/Base2';
import { BeBetterListing } from '../../templates/Lists/BeBetterListing';

const beBetterListing: () => JSX.Element = () => {
  return <BeBetterListing />;
};

const BeBetterListingPage = () => <Base2 contentFunc={beBetterListing} />;

export default BeBetterListingPage;
