import React from 'react';
import { render} from '@testing-library/react';
import LandingPage from '../LandingPage';

describe('<Landing Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<LandingPage/>);
        expect(wrapper).toMatchSnapshot();
    });
});