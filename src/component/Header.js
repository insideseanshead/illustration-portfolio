import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Hero } from 'react-bulma-components';

const Header = () => {
  return (
    <section className="hero is-success is-fullheight">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Fullheight title
      </h1>
      <h2 className="subtitle">
        Fullheight subtitle
      </h2>
    </div>
  </div>
</section>
  );
};

export default Header;
