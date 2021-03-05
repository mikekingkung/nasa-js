import React from 'react';
import { render} from '@testing-library/react';
import LoadingContent from '../LoadingContent';

describe('<LoadingContent Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<LoadingContent/>);
        expect(wrapper).toMatchSnapshot();
    });
});