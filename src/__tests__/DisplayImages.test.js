import React from 'react';
import { render, cleanup, screen, fireEvent} from '@testing-library/react';
import DisplayImages from '../components/DisplayImages';
afterEach(cleanup);

describe ('test displayimages renders titles, descriptions and images correctly', () => {
    const images = [
        {
            "image": {
                    "id": "0",
                    "url": "http://images-assets.nasa.gov/image/PIA19705/PIA19705~large.jpg",
                    "title": "New Details on Pluto",
                    "description": "This image of Pluto was taken by New Horizons Long Range Reconnaissance Imager (LORRI) at 4:18 UT on July 9 2015 from a range of 3.9 million miles (6.3 million kilometers). It reveals new details on the surface of Pluto including complex patterns in the transition between the very dark equatorial band (nicknamed The Whale which occupies the lower part of the image and the brighter northern terrain."
                    }
        }
    ];

    test('test title, description and image renders correctly', async () => {
        const searchText = "Pluto";
        const advanced = false
        const isLoaded = true;
        const handleButtonPressFn = jest.fn();

        render(<DisplayImages images={images}
            searchText={searchText}
            advanced={advanced}
            isLoaded={isLoaded}
            handleButtonPress={handleButtonPressFn} />);

        expect(await screen.findByTestId('imageTitle'));
        expect(await screen.findByTestId('imageDescription'));
        expect(await screen.findByTestId('imageImg'));
    });
});

describe ('test displayimages renders titles, descriptions and videos correctly', () => {
    const images = [
        {
            "video": {
                    "id": "0",
                    "url": "http://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/NHQ_2019_0311_Go Forward to the Moon~orig.mp4",
                    "title": "Go Forward to the moon",
                    "description": "This is a video of the moon."
                    }
        }
    ];
    test('test title, description and videos renders correctly', async () => {
        const searchText = "Moon";
        const advanced = false
        const isLoaded = true;
        const handleButtonPressFn = jest.fn();

        render(<DisplayImages images={images}
            searchText={searchText}
            advanced={advanced}
            isLoaded={isLoaded}
            handleButtonPress={handleButtonPressFn} />);

        expect(await screen.findByTestId('videoTitle'));
        expect(await screen.findByTestId('videoDescription'));
        expect(await screen.findByTestId('videoVideo'));
    });


    test('test save for later button renders correctly', async () => {
        const searchText = "Moon";
        const advanced = false
        const isLoaded = true;

        const mockfn = jest.fn()
        render(<DisplayImages images={images}
            searchText={searchText}
            advanced={advanced}
            isLoaded={isLoaded}
            handleButtonPress = {mockfn} />);

        const button = await screen.findByTestId('saveDetails');
        fireEvent.click(button);
        expect(mockfn).toHaveBeenCalled();
        expect( screen.findByTestId('markedForSave'));        
    });
});
