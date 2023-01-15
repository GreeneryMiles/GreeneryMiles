import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Circle } from 'google-maps-react';
import jsondata from './housedata.json';

const mapStyleRef = {
  width: '100%',
  height: '100%',
  position: 'absolute'
};

const markerStyleRef = {
  width: '50px',
  height: '50px'
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
      stores: [{latitude: jsondata.data[1].lat, longitude: jsondata.data[1].lng, addresses:jsondata.data[1].address, price:jsondata.data[1].price},
        {latitude: jsondata.data[2].lat, longitude: jsondata.data[2].lng, addresses:jsondata.data[2].address, price:jsondata.data[2].price},
        {latitude: jsondata.data[3].lat, longitude: jsondata.data[3].lng, addresses:jsondata.data[3].address, price:jsondata.data[3].price},
        {latitude: jsondata.data[4].lat, longitude: jsondata.data[4].lng, addresses:jsondata.data[4].address, price:jsondata.data[4].price},
        {latitude: jsondata.data[5].lat, longitude: jsondata.data[5].lng, addresses:jsondata.data[5].address, price:jsondata.data[5].price},
        {latitude: jsondata.data[6].lat, longitude: jsondata.data[6].lng, addresses:jsondata.data[6].address, price:jsondata.data[6].price}]
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
   }} name={[store.addresses, " Price: ", store.price]}
   onClick={this.onMarkerClick} />
  })
}
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyleRef}
          initialCenter={{ lat: 43.008700, lng:-81.263500}}
        >
          {this.displayMarkers()}
          <Marker
          onClick={this.onMarkerClick}
          name={jsondata.data[0].address}
        />
        <Circle center={{ lat: 43.008700, lng:-81.263500}}radius={500} options={closeOptions}/>
        <Circle center={{ lat: 43.008700, lng:-81.263500}}radius={1300} options={middleOptions}/>
        <Circle center={{ lat: 43.008700, lng:-81.263500}}radius={2100} options={farOptions}/>

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

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "rgb(255, 0, 0)",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};


export default GoogleApiWrapper({
  apiKey: ''
})(App);
