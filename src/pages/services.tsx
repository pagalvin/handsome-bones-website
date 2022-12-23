import { Base2 } from '../templates/Base2';

const services: () => JSX.Element = () => {
  return <div>Services go here</div>;
};

const ServicesPage = () => <Base2 contentFunc={services} />;

export default ServicesPage;
