import React from 'react';
import { render, act, waitFor, cleanup, screen, findByTestId } from '@testing-library/react';
import mockedAxios from 'axios'
import UserDetails from '../../../../components/main/users/UserDetails';


describe ('test UserDetails renders correctly', () => {

  const getUserDetailsUrl =  `http://localhost:8080/users/getbyusername`;
  const getUserLinksUrl = `http://localhost:8080/users/getlinksbyusername`;

  it('test user details fields present', async () => {
    const data = {
        "userName": "Hogbandit",
        "title" : "Mr",
        "firstName": "Mike",
        "lastName": "king",
        "emailAddress" : "mike@abc.com",
        "phoneNumber" : "12334",
        "dob": "20/20/2020",
        "gender" : "m"
    }

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

  mockedAxios.get.mockImplementationOnce((getUserDetailsUrl) => {
    switch (getUserDetailsUrl) {
      case getUserDetailsUrl:
        return Promise.resolve({
          data
        })
        default:
         return Promise.reject(new Error("not found"))
        }
      })
        .mockImplementationOnce((getUserLinksUrl) => {
          switch (getUserLinksUrl) {
            case getUserLinksUrl:
              return Promise.resolve({
                linkData
              })
            default:
              return Promise.reject(new Error("not found"))
          }
        })
    act(() => {
      render(<UserDetails />);
    });
    const resolvedUserName = await screen.findByTestId('userName');
    expect(resolvedUserName);
    expect(await screen.findByTestId('title'));
    expect(await screen.findByTestId('firstName'));
    expect(await screen.findByTestId('lastName'));
    expect(await screen.findByTestId('emailAddress'));
    expect(await screen.findByTestId('phoneNumber'));
    expect(await screen.findByTestId('dob'));
    expect(await screen.findByTestId('gender'));
    expect(await screen.findByTestId('linksId'));
    expect(await screen.findByTestId('linksTitle'));
    expect(await screen.findByTestId('linksUrl'));
    expect((resolvedUserName).textContent).toBe('  UserName:Guest');
  });

  // xit('test user details fields present', async () => {
  //   const data = {
  //       "userName": "Hogbandit",
  //       "title" : "Mr",
  //       "firstName": "Mike",
  //       "lastName": "king",
  //       "emailAddress" : "mike@abc.com",
  //       "phoneNumber" : "12334",
  //       "dob": "20/20/2020",
  //       "gender" : "m"
  //   }

  //   const linkData = [];

  //   mockedAxios.get.mockImplementationOnce((getUserDetailsUrl) => {
  //       switch (getUserDetailsUrl) {
  //         case getUserDetailsUrl:
  //           return Promise.resolve({
  //               data
  //           })
  //         default:
  //           return Promise.reject(new Error("not found"))
  //       }
  //     })
  //     .mockImplementationOnce((getUserLinksUrl) => {
  //       switch (getUserLinksUrl) {
  //         case getUserLinksUrl:
  //           return Promise.resolve({
  //             linkData
  //           })
  //         default:
  //           return Promise.reject(new Error("not found"))
  //       }
  //     })
  //   act(() => {
  //     render(<UserDetails />);
  //   });
  //   expect(await screen.getByText('Loading user links')).toBeVisible()
  // });
});     

