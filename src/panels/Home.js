import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import {View, PanelHeader, FormLayout, Checkbox, Link} from "@vkontakte/vkui";

import Post from "./components/Post";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <Post/>
 
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
