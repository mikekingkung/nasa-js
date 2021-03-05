import React from 'react';
import { render} from '@testing-library/react';
import TopicsContent from '../TopicsContent';

describe('TopicsContent Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<TopicsContent/>);
        expect(wrapper).toMatchSnapshot();
    });
});