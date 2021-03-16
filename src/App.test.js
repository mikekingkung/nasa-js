import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App component', () => {
  it('Correctly renders' ,() => {
      const wrapper = render(<App/>);
      expect(wrapper).toMatchSnapshot();
  });
});


