import React from 'react';
import { render} from '@testing-library/react';
import LinksContent from '../LinksContent';

describe('LinksContent Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<LinksContent/>);
        expect(wrapper).toMatchSnapshot();
    });
});