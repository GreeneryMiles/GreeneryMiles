import mongoose from "mongoose";
import GoogleMapsAPI from 'googlemaps';
import dotenv from 'dotenv'
import distance from "google-distance-matrix";

dotenv.config();

var publicConfig = {
    key: process.env.GOOGLE_GEOENCODING_API,
    stagger_time:       1000, // for elevationPath
    encode_polylines:   false,
    secure:             true, // use https
};
var gmAPI = new GoogleMapsAPI(publicConfig);

distance.key(process.env.GOOGLE_GEOENCODING_API);
distance.units('imperial');

export const getCoordinatesByAddress = async (req, res) => {
    const { address } = req.body;
    console.log(req.body);
    try {
        // TODO: validate address

        // response format
        var response = {
            lat: '',
            lng: ''
        };

        // get google geo-encoding params
        var geoLocation = {
            "address":    "",
            "components": "components=country:GB",
            "bounds":     "55,-1|54,1",
            "language":   "en",
            "region":     "Canada"
        };
        geoLocation.address = address;

        // call from geo-encoding apis
        gmAPI.geocode(geoLocation, function(err, result) {
            response.lat = result.results[0].geometry.location.lat;
            response.lng = result.results[0].geometry.location.lng;
            res.json(response);
        });
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
}


export const getDistanceByTwoCoordinates = async (req, res) => {
    const {origin_lat, origin_lng, dest_lat, dest_lng} = req.body;
    let origin = `${origin_lat},${origin_lng}`;
    let dest = `${dest_lat},${dest_lng}`;

    var origins = [];
    var destinations = [];

    origins.push(origin);
    destinations.push(dest);

    // response body
    var dist = {
        distance: ''
    }

    // calling google distance matrix
    distance.matrix(origins, destinations, function (err, distances) {
        if (err) {
            return console.log(err);
        }
        if (!distances) {
            return console.log('no distances');
        }
        if (distances.status == 'OK') {
            for (var i = 0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.text;
                        console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                        dist.distance = distance;
                        res.json(dist);
                    } else {
                        res.status(500).json({ message: `${destination} + ' is not reachable by land from ' + ${origin}`});
                    }
                }
            }
        }
    });
}
