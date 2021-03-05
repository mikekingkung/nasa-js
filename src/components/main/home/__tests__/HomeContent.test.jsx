import React from 'react';
import { render} from '@testing-library/react';
import HomeContent from '../HomeContent';

describe('<HomeContent Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<HomeContent/>);
        expect(wrapper).toMatchSnapshot();
    });
});