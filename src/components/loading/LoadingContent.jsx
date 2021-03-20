import loadingImage from  '../../images/loadingImage.jpg';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


const LoadingContent = () => {

    return (
        <div>

          <img
              className="img-fluid"
              src={loadingImage}
              alt="Learn Space Ltd"
          />
        <div>
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div>
      </div>
    );
};

export default LoadingContent;
