import React from 'react';
import { render} from '@testing-library/react';
import SignUpContent from '../SignUpContent';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn()
    })
  }));

describe('SignUpContent Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<SignUpContent/>);
        expect(wrapper).toMatchSnapshot();
    });
});