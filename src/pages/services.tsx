import { Base2 } from '../templates/Base2';
import { ServicesListing } from '../templates/Lists/ServicesListing';

const services: () => JSX.Element = () => {
  return <ServicesListing />;
};

const ServicesPage = () => <Base2 contentFunc={services} />;

export default ServicesPage;
