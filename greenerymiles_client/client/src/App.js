import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import jsondata from './housedata.json';

const styleRef = {
  width: '100%',
  height: '100%'
};

class App extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={styleRef}
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


