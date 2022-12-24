import { Base2 } from '../templates/Base2';
import { ImprintsListing } from '../templates/Lists/ImprintsListing';

const imprints: () => JSX.Element = () => {
  return <ImprintsListing />;
};

const ImprintsPage = () => <Base2 contentFunc={imprints} />;

export default ImprintsPage;
