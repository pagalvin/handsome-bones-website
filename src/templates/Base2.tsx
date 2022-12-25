import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';

type Base2Props = {
  contentFunc?: () => JSX.Element;
};

const Base2 = (props: Base2Props) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {props.contentFunc ? props.contentFunc() : null}
    <Banner />
    <Footer />
  </div>
);

export { Base2 };
