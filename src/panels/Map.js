import React from "react";
import PropTypes from "prop-types";
import { platform, IOS, Button } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import SearchCard from "./SearchCard";
import SimpleMap from "./MapContainer";

const osName = platform();

const Map = (props) => (
  <Panel id={props.id}>
    <SimpleMap nazad={props} />
  </Panel>
);

Map.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Map;
