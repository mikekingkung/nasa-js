import React from 'react';
import { render} from '@testing-library/react';
import SignUp from '../SignUp';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn()
    })
  }));

describe('SignUp Page component', () => {
    it('Correctly renders' ,() => {
        const wrapper = render(<SignUp/>);
        expect(wrapper).toMatchSnapshot();
    });
});