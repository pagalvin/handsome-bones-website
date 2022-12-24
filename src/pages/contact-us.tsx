import { Section } from '../layout/Section';
import { Base2 } from '../templates/Base2';

const contactUs: () => JSX.Element = () => {
  return (
    <Section title="Contact Us">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSej_8HDm0TQeN4oCNvbj_kgEfVhMM3gEYn6FUS4uTezjBYXLA/viewform?embedded=true"
        width="640"
        height="600"
      >
        Loading…
      </iframe>{' '}
    </Section>
  );
};

const ContactUsPage = () => <Base2 contentFunc={contactUs} />;

export default ContactUsPage;
