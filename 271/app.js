// Write an expressJS code in which RESTapi is created for json object named Places I love which
// contains name,country,state,city and rating out of 10(no decimal points) is given.upon passing
// ratings on the browser it should display the places having that rating.i.e. on
// localhost:30001/a/10 should display all the places having 10 ratings.

const express = require('express');

const app = express();

const places = [
    {
        name: 'Badhu',
        country: 'India',
        state: 'Gujarat',
        city: 'Surendranagar',
        rating: 10,
    },
    {
        name: 'Railway Station',
        country: 'India',
        state: 'Gujarat',
        city: 'Ahmedabad',
        rating: 10,
    },
    {
        name: 'Everything else in Ahemdabad',
        country: 'India',
        state: 'Gujarat',
        city: 'Ahmedabad',
        rating: 0,
    },
    {
        name: 'LJU',
        country: 'India',
        state: 'Gujarat',
        city: 'Ahmedabad',
        rating: 1,
    },
    {
        name: 'Sejal Manchurian',
        country: 'India',
        state: 'Gujarat',
        city: 'Ahmedabad',
        rating: 8,
    },
    {
        name: 'Rajwadi',
        country: 'India',
        state: 'Gujarat',
        city: 'Ahmedabad',
        rating: 9,
    },
];
app.get('/', (req, res) => {
    res.send(places.sort((a, b) => b.rating - a.rating));
});
app.get('/a/:rating', (req, res) => {
    const rating = parseInt(req.params.rating);
    const placesWithRating = places.filter(place => place.rating === rating);
    res.send(placesWithRating);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
