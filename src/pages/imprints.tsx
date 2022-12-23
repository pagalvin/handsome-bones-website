import { Base2 } from '../templates/Base2';

const imprints: () => JSX.Element = () => {
  return <div>Imprints go here</div>;
};

const ImprintsPage = () => <Base2 contentFunc={imprints} />;

export default ImprintsPage;
