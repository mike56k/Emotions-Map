import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MyGreatPlace from "./MyGreatPlace.js";
import PropTypes from "prop-types";
import SearchCard from "./SearchCard.js";
import "./mapcontainer.css";
import { platform, IOS, Button, ModalCard, CellButton } from "@vkontakte/vkui";

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
      <div className="rel">
        <div style={{ height: "78vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBKw11akhPLco6hZSw8IU3heygOKz7150M",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <MyGreatPlace
              lat={59.955413}
              nazad={this.props.nazad}
              lng={30.337844}
              text={"😷 \n Карантин"}
            />
            <MyGreatPlace
              lat={59.975413}
              nazad={this.props.nazad}
              lng={30.337844}
              text={"🍂 \n Осень"}
            />
          </GoogleMapReact>
        </div>
        <SearchCard style={{ height: "22vh", width: "100%" }} />
      </div>
    );
  }
}

export default SimpleMap;
