import React from 'react';

const UserContext = React.createContext({
    signedIn: false,
    toggleSignedIn: () => {}
});
UserContext.displayName = "User Context";

export default UserContext;