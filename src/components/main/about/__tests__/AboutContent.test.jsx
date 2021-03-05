import React from 'react';
import { render} from '@testing-library/react';
import AboutContent from '../AboutContent';

describe('<AboutContent Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<AboutContent/>);
        expect(wrapper).toMatchSnapshot();
    });
});