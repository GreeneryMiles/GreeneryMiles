# GreeneryMiles

## Frontend Demo 

![demo1](./demo_pic/pic1.png)

![demo2](./demo_pic/pic2.png)

## API documents

\apis\getAddress

1. getLonAndLatByAddress
POST /apis/coordinates
- req body
```json
{
  "address": "121, Curtain Road, EC2A 3AD, London UK"
}
```
- response 
```json
{
  "lat": 51.5259295,
  "lng": -0.0805505
}
```

2. get location distance between two places by two coordinates
POST /apis/distance_cord

- request body

```json
{
  "origin_lat": "43.004198",
  "origin_lng": "-81.2652997",
  "dest_lat": "43.0038463",
  "dest_lng": "-81.2674126",
  "time_option": "30"
}
```

- response
```json
{
  "distance": "0.2 km",
  "duration": "1 min",
  "gasoline": "2.6 liters",
  "co2emission": "0.536 kg"
}
```

3. get location distance between two places by two addresses
POST /apis/distance_addr

- request body

```json
{
    "origin": "308 Ramsay Rd, London, ON N6G 1N8", 
    "destination": "1115 The Pkwy, London, ON N6A 2X2",
    "time_option": "7"
}
```

- response
```json
{
    "distance": "2.7 km",
    "duration": "7 mins",
    "gasoline": "246 liter",
    "co2emission": "50.7 kg"
}
```


4.get nearby house prices 
GET /apis/houses

response
```json
{
    "data": [
        {
            "address": "104 Regent St, London, ON N6A 2G4",
            "lat": 43.004198,
            "lng": -81.2652997,
            "price": "$599,900 CAD"
        },
        {
            "address": "467 Coombs Ave, London, ON N6G 1J8",
            "lat": 42.9977861,
            "lng": -81.2810638,
            "price": "$560,000 CAD"
        },
        {
            "address": "1089 The Pkwy, London, ON N6A 2W8",
            "lat": 43.0038463,
            "lng": -81.2674126,
            "price": "$599,900 CAD"
        },
        {
            "address": "547 Kininvie Dr, London, ON N6G 1P1",
            "lat": 43.00146,
            "lng": -81.28345999999999,
            "price": "$720,000 CAD"
        },
        {
            "address": "308 Ramsay Rd, London, ON N6G 1N8",
            "lat": 43.0020065,
            "lng": -81.28597049999999,
            "price": "$740,000 CAD"
        },
        {
            "address": "1116 The Pkwy, London, ON N6A 2X3",
            "lat": 43.0058789,
            "lng": -81.267133,
            "price": "$730,000 CAD"
        },
        {
            "address": "1115 The Pkwy, London, ON N6A 2X2",
            "lat": 43.0059893,
            "lng": -81.267803,
            "price": "$740,000 CAD"
        }
    ]
}
```