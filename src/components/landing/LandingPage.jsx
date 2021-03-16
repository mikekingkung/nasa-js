import landingPageImage from  '../../images/landingPageImage.jpg';
import { content } from '../../data/content.json';
const LandingPage = () => {
    return (
        <div>
          <p data-testid="welcome">{content.welcome}</p>
            <img
                className="img-fluid"
                src={landingPageImage}
                alt="Learn Space Ltd"
            />
        </div>
    );
};

export default LandingPage;
