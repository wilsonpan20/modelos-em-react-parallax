import { Image } from '../components/core/Image';
import { FillerSection } from '../components/core/FillerSection';

import img from '../assets/img-spaceport.jpg';

export const ExampleFixedBackground = () => {
  return (
    <section className="bg-dark">
      <div className="container py-5">
        <p className="constrain mb-3">Este é o tipo mais simples de paralaxe de implementar.</p>
        <p className="constrain">
        Nós praticamente só precisamos de um<code>&lt;div&gt;</code> elemento e usar CSS<code>background-image</code> and{' '}
          <code>background-attachment: fixed;</code>
        </p>
      </div>

      <Image src={img} alt="Space Port Background" height="50vh" fixed darken>
        <h3>Isso é meio legal, hein</h3>
      </Image>

      <FillerSection />
    </section>
  );
};
