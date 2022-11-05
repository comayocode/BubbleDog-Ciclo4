import React, { Component } from "react";
import "./Map.css";
import GoogleMaps from "simple-react-google-maps";
export default class Map extends Component {
  render() {
    return (
      <div>
        <GoogleMaps
          id="map"
          apiKey={"AIzaSyBZ1qgHuTSSRMs6-TQmwcnVcyNL9CHVius"}
          style={{ height: "19vw", width: "calc(100%/2.5)" }}
          zoom={10}
          center={{
            lat: 40.717029,
            lng: -74.032816,
          }}
          markers={[{ lat: 40.717029, lng: -74.032816 }]}
        />
      </div>
    );
  }
}
