import React from 'react';
import { render} from '@testing-library/react';
import Footer from '../Footer';


describe('Footer component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<Footer/>);
        expect(wrapper).toMatchSnapshot();
    });
});