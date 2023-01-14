import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%',
};
class App extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 43.009320,
            lng: -81.271730
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsB764Ax1QjNFQ2_rSbwDaPJLlU81JBYc'
})(App);