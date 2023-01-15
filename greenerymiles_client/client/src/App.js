import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import jsondata from './housedata.json';

const mapStyleRef = {
  width: '100%',
  height: '100%',
  position: 'absolute'
};


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
      stores: [{latitude: jsondata.data[1].lat, longitude: jsondata.data[1].lng, addresses:jsondata.data[1].address},
        {latitude: jsondata.data[2].lat, longitude: jsondata.data[2].lng, addresses:jsondata.data[2].address},
        {latitude: jsondata.data[3].lat, longitude: jsondata.data[3].lng, addresses:jsondata.data[3].address},
        {latitude: jsondata.data[4].lat, longitude: jsondata.data[4].lng, addresses:jsondata.data[4].address},
        {latitude: jsondata.data[5].lat, longitude: jsondata.data[5].lng, addresses:jsondata.data[5].address},
        {latitude: jsondata.data[6].lat, longitude: jsondata.data[6].lng, addresses:jsondata.data[6].address}]
    };
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

displayMarkers = () => {
  return this.state.stores.map((store, index) => {
    return <Marker key={index} id={index} position={{
     lat: store.latitude,
     lng: store.longitude
   }} name={store.addresses}
   onClick={this.onMarkerClick} />
  })
}

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyleRef}
          initialCenter={{ lat: jsondata.data[0].lat, lng: jsondata.data[0].lng}}

        >
          {this.displayMarkers()}
          <Marker
          onClick={this.onMarkerClick}
          name={jsondata.data[0].address}
          
        />
         
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsB764Ax1QjNFQ2_rSbwDaPJLlU81JBYc'
})(App);