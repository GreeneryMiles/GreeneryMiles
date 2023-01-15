import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import jsondata from './housedata.json';

const mapStyleRef = {
  width: '100%',
  height: '100%'
};

const markerStyleRef = {
  width: '50px',
  height: '50px'
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 43.004198, lng: -81.2652997},
              {latitude: 42.9977861, longitude: -81.2810638},
              {latitude: 43.0038463, longitude: -81.2674126},
              {latitude: 43.00146, longitude: -81.28345999999999},
              {latitude: 43.0020065, longitude: -81.28597049999999},
              {latitude: 43.0058789, longitude: -81.267133}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyleRef}
          initialCenter={{ lat: 43.009319, lng: -81.271729}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsB764Ax1QjNFQ2_rSbwDaPJLlU81JBYc'
})(App);