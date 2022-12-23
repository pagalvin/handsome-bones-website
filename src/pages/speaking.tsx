import { Base2 } from '../templates/Base2';

const speaking: () => JSX.Element = () => {
  return <div>Speaking goes here</div>;
};

const SpeakingPage = () => <Base2 contentFunc={speaking} />;

export default SpeakingPage;
