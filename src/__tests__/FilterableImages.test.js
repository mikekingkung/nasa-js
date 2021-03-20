import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import mockedAxios from 'axios'
import FilterableImages from '../components/FilterableImages';

const url = 'http://localhost:8080/getimages';
const query = 'Pluto';

describe ('test SearchBar renders correctly', () => {
    it('test searchBar present', async () => {
        const data = [
            {
                "image": {
                        "id": "0",
                        "url": "http://images-assets.nasa.gov/image/PIA19705/PIA19705~large.jpg",
                        "title": "New Details on Pluto",
                        "description": "This image of Pluto was taken by New Horizons Long Range Reconnaissance Imager (LORRI) at 4:18 UT on July 9 2015 from a range of 3.9 million miles (6.3 million kilometers). It reveals new details on the surface of Pluto including complex patterns in the transition between the very dark equatorial band (nicknamed The Whale which occupies the lower part of the image and the brighter northern terrain."
                }
            }
        ];

        mockedAxios.get.mockResolvedValueOnce(data);
        const { getByText } = render(<FilterableImages query={query} />);
        const resolvedSearchBar = await screen.findByTestId('searchBar');
    });
});        


describe ('test axios request for data', () => {
    test('mocking axios request', async () => {
        const data = [
            {
                "image": {
                        "id": "0",
                        "url": "http://images-assets.nasa.gov/image/PIA19705/PIA19705~large.jpg",
"title": "New Details on Pluto",
                        "description": "This image of Pluto was taken by New Horizons Long Range Reconnaissance Imager (LORRI) at 4:18 UT on July 9 2015 from a range of 3.9 million miles (6.3 million kilometers). It reveals new details on the surface of Pluto including complex patterns in the transition between the very dark equatorial band (nicknamed The Whale which occupies the lower part of the image and the brighter northern terrain."
                        }
            }
        ];

        mockedAxios.get.mockResolvedValueOnce(data);
        const { getByText } = render(<FilterableImages query={query} />);
        const resolvedSearchBar = await screen.findByTestId('searchBar');
        //expect(screen.getByLabelText('Search:'));
        await waitFor(() => {
            expect(getByText('Search Results:'));
        });


        expect((resolvedSearchBar).textContent).toBe('Search:Search Results:No Search Results Found'); 

        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith(
            `${url}/Pluto`,  {"headers": {"Access-Control-Allow-Credentials": "*", "Content-Type": "application/json"}});
    });
});

