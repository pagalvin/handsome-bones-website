import { Base2 } from '../templates/Base2';

const resources: () => JSX.Element = () => {
  return <div>Resources go here</div>;
};

const ResourcesPage = () => <Base2 contentFunc={resources} />;

export default ResourcesPage;
