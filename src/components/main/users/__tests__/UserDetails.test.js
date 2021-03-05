import React from 'react';
import { render} from '@testing-library/react';
import UserDetails from '../UserDetails';

describe('UserDetails Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<UserDetails/>);
        expect(wrapper).toMatchSnapshot();
    });
});