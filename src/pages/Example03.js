// import './ExampleThree.scss';

import { AnimatedFade } from '../components/core/AnimatedFade';
import { ExampleScrollBackgroundRev } from '../examples/ExampleScrollBackgroundRev';

function ExampleThree() {
  return (
    <AnimatedFade>
      <div className="ExampleThree">
        <header className="header">
          <div className="container header py-4 center">
            <h1 className="pageTitle">3. Scroll :: INVERTIDO</h1>
          </div>
        </header>

        <ExampleScrollBackgroundRev />
      </div>
    </AnimatedFade>
  );
}

export default ExampleThree;
