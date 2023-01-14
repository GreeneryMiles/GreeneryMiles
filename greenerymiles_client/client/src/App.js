import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import pin from './pngegg.png';
import jsondata from './housedata.json';

const mapStyleRef = {
  width: '100%',
  height: '100%'
};

const markerStyleRef = {
  width: '50px',
  height: '50px'
};

class App extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyleRef}
        initialCenter={{lat: 43.009320, lng: -81.271730}}

      />
    );
  }
}

function marker(){

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsB764Ax1QjNFQ2_rSbwDaPJLlU81JBYc'
})(App);


