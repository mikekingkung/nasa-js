import homeBanner from  '../../images/bannerimage.png';
import PropTypes from 'prop-types';

const HeaderBannerImg = ({location: {pathname}}) => {
    return (
        <img
            className="img-fluid"
            src={homeBanner}
            alt="Learn Space Ltd"
        />
    );
};

HeaderBannerImg.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
}

export default HeaderBannerImg;
