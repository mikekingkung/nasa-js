import loadingImage from  '../../images/loadingImage.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const LoadingContent = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

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
