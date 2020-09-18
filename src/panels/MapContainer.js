import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MyGreatPlace from "./MyGreatPlace.js";
import PropTypes from "prop-types";
import SearchCard from "./SearchCard.js";
import "./mapcontainer.css";
class SimpleMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <div style={{ height: "100vh", width: "100%" }} id="gmap">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBKw11akhPLco6hZSw8IU3heygOKz7150M",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <MyGreatPlace
              lat={59.955413}
              lng={30.337844}
              text={"🛵\nСкутер"} /* Kreyser Avrora */
            />
            <MyGreatPlace
              {...this.props.greatPlaceCoords}
              text={"B"} /* road circle */
            />
          </GoogleMapReact>
        </div>
        <SearchCard class="container overlap" />{" "}
      </div>
    );
  }
}

export default SimpleMap;
