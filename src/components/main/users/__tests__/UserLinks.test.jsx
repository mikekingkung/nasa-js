import React from 'react';
import { render, waitFor, cleanup, screen, findByTestId } from '@testing-library/react';
import mockedAxios from 'axios'
import UserLinks from '../../../../components/main/users/UserLinks';

describe ('test UserDetails renders correctly', () => {

  it('test user details fields render', async () => {

    const linkData = [{
        "id" : 123,
        "url": "https://nasa.gov/links123",
        "title" : "Earth to Mars"
      },
      {
          "id" : 456,
          "url": "https://nasa.gov/links456",
          "title" : "Earth to Venus"
      },
    ]

    const { getByText } = render(<UserLinks links={linkData} />);
    expect(await screen.findByTestId('linksId'));
    expect(await screen.findByTestId('linksTitle'));
    expect(await screen.findByTestId('linksUrl'));
  });

  it('test user links no links present', async () => {
    const linkData = [];
    const { getByText } = render(<UserLinks links={linkData} />);
     expect(screen.getByText('no search links')).toBeVisible()
  });

});     

