import { Base2 } from '../../../templates/Base2';
import { CatsClawListing } from '../../../templates/Lists/CatsClawListing';

const catsClawListing: () => JSX.Element = () => {
  return <CatsClawListing />;
};

const CatsClawOverviewPage = () => <Base2 contentFunc={catsClawListing} />;

export default CatsClawOverviewPage;
