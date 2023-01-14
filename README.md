# shehacks_frontend


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

/apis/distance
2. get location distance in miles or km between two places

- request body
```json
{
  "origin_lat": "40.7421",
  "origin_lng": "73.9914",
  "dest_lat": "41.8337329",
  "dest_lng": "73.9914"
}
```

- response
```json
{
  "distance": 1.2
}
```