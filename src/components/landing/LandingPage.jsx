import landingPageImage from  '../../images/landingPageImage.jpg';

const LandingPage = () => {
    return (
        <div>
            <p> Welcome </p>
            <img
                className="img-fluid"
                src={landingPageImage}
                alt="Learn Space Ltd"
            />
        </div>
    );
};

export default LandingPage;
