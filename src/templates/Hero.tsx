import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/imprints">
            <a>Imprints</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/resources">
            <a>Resources</a>
          </Link>
        </li>
        <li>
          <Link href="/speaking">
            <a>Speaking</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <h1>
        Handsome Bones Publishing, an eclectic collection of technology books,
        fantasy novels and other works.
      </h1>
      {/* <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
        }
      /> */}
    </Section>
  </Background>
);

export { Hero };
