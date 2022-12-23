import { Base2 } from '../templates/Base2';

const contactUs: () => JSX.Element = () => {
  return <div>Contact us goes here</div>;
};

const ContactUsPage = () => <Base2 contentFunc={contactUs} />;

export default ContactUsPage;
