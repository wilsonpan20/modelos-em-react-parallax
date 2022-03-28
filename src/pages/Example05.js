import { AnimatedFade } from '../components/core/AnimatedFade';

// import './ExampleFive.scss';
function ExampleFive() {
  return (
    <AnimatedFade>
      <div className="ExampleFive">
        <header className="header position-relative z-index-10 border-bottom-reveal">
          <div className="container header py-4 center">
            <h1 className="pageTitle">5. A cena animada</h1>
          </div>
        </header>
        <p className="p-5 m-0">
        O seguinte é uma demonstração dos efeitos de Parallax controlados.
        </p>
      </div>
    </AnimatedFade>
  );
}

export default ExampleFive;
