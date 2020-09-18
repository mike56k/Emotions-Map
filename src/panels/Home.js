import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import {
  View,
  PanelHeader,
  FormLayout,
  Checkbox,
  Link,
  Button,
} from "@vkontakte/vkui";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <Button onClick={go} data-to="feed">
      feed
    </Button>
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
