/* global google */
import React, {Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";

export const Map = props => {
    return (
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}
      >
        {props.places.map(place => {
          return (
            <Fragment key={place.id}>
              <Marker
                position={{
                  lat: parseFloat(place.latitude),
                  lng: parseFloat(place.longitude)
                }}
              />
              {place.circle && <Circle
                defaultCenter={{
                  lat: parseFloat(place.latitude),
                  lng: parseFloat(place.longitude)
                }}
                radius={place.circle.radius}
                options={place.circle.options}
              />}
            </Fragment>
          );
        })}
      </GoogleMap>
    );
}

 export default withScriptjs(withGoogleMap(Map));







// import React, { Component, Fragment } from 'react';
// import { GoogleMap, GoogleApiWrapper, Marker, Circle} from 'google-maps-react';
// import pin from './pngegg.png';
// import jsondata from './housedata.json';

// const mapStyleRef = {
//   width: '100%',
//   height: '100%'
// };

// const markerStyleRef = {
//   width: '50px',
//   height: '50px'
// };

// const places = [
//   {
//     id: 1,
//     name: "Park Slope",
//     latitude: "40.6710729",
//     longitude: "-73.9988001",
//     circle: {
//       radius: 3000,
//       options: {
//         strokeColor: "#ff0000"
//       }
//     }
//   },   
// ] 

// class App extends React.Component {
//   render() {
//     return (
//       <GoogleMap
//         defaultZoom={this.props.zoom}
//         defaultCenter={this.props.center}
//       >
//         {this.props.places.map(place => {
//           return (
//             <Fragment key={place.id}>
//               <Marker
//                 position={{
//                   lat: parseFloat(place.latitude),
//                   lng: parseFloat(place.longitude)
//                 }}
//               />
//               {place.circle && (
//                 <Circle
//                   defaultCenter={{
//                     lat: parseFloat(place.latitude),
//                     lng: parseFloat(place.longitude)
//                   }}
//                   radius={place.circle.radius}
//                   options={place.circle.options}
//                 />
//               )}
//             </Fragment>
//           );
//         })}
//       </GoogleMap>
//     );
//   }
// }

// // class App extends Component {
// //   render() {
// //     return (
// //       <Map
// //         google={this.props.google}
// //         zoom={10}
// //         style={mapStyleRef}
// //         initialCenter={{lat: 43.009320, lng: -81.271730}}
        
// //       >
// //         <>
// //         {this.props.places.map(place => {
// //           return (
// //             <Marker
// //               position={{
// //                 lat: parseFloat(place.latitude),
// //                 lng: parseFloat(place.longitude)
// //               }}
// //             />
// //           );
// //         })}
// //         </>
// //         {/* <>
// //         <Marker position={{lat: 43.009320, lng: -81.271730}}
// //         icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
// //         <Circle center={{lat: 43.009320, lng: -81.271730}} radius={15000} options={closeOptions}/>
// //         <Circle center={{lat: 43.009320, lng: -81.271730}} radius={30000} options={middleOptions}/>
// //         <Circle center={{lat: 43.009320, lng: -81.271730}} radius={45000} options={farOptions}/>
        
// //         </> */}

// //       </Map>

// //     );
// //   }
// // }

// // function marker(){

// // }


// const defaultOptions = {
//   strokeOpacity: 0.5,
//   strokeWeight: 2,
//   clickable: false,
//   draggable: false,
//   editable: false,
//   visible: true,
// };
// const closeOptions = {
//   ...defaultOptions,
//   zIndex: 3,
//   fillOpacity: 0.05,
//   strokeColor: "#8BC34A",
//   fillColor: "#8BC34A",
// };
// const middleOptions = {
//   ...defaultOptions,
//   zIndex: 2,
//   fillOpacity: 0.05,
//   strokeColor: "#FBC02D",
//   fillColor: "#FBC02D",
// };
// const farOptions = {
//   ...defaultOptions,
//   zIndex: 1,
//   fillOpacity: 0.05,
//   strokeColor: "#FF5252",
//   fillColor: "#FF5252",
// };

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDsB764Ax1QjNFQ2_rSbwDaPJLlU81JBYc'
// })(App);


