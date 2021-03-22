import React , {useContext} from 'react';
import MyContext from './MyContext';

const useMyContext = () => {
    const myContext = useContext(MyContext);
    return myContext;
}

export default useMyContext;
