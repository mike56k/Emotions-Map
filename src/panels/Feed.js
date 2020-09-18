import {
  View,
  Epic,
  Tabbar,
  TabbarItem,
  Panel,
  PanelHeader,
  Button,
} from "@vkontakte/vkui";
import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28MessageOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
} from "@vkontakte/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

const osName = platform();

const Feed = (props) => {
  const [activeStory, setActiveStory] = useState("feed");
  const onStoryChange = (e) => {
    setActiveStory(e.currentTarget.dataset.story);
  };
  return (
    <Panel id={props.id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={props.go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Feed
      </PanelHeader>
      <Epic
        activeStory={activeStory}
        tabbar={
          <Tabbar>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === "feed"}
              data-story="feed"
              text="Новости"
            >
              <Icon28NewsfeedOutline />
            </TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === "services"}
              data-story="services"
              text="Сервисы"
            >
              <Icon28ServicesOutline />
            </TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === "messages"}
              data-story="messages"
              label="12"
              text="Сообщения"
            >
              <Icon28MessageOutline />
            </TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === "clips"}
              data-story="clips"
              text="Клипы"
            >
              <Icon28ClipOutline />
            </TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === "profile"}
              data-story="profile"
              text="Профиль"
            >
              <Icon28UserCircleOutline />
            </TabbarItem>
          </Tabbar>
        }
      >
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader>Новости</PanelHeader>
            <Button onClick={props.go} data-to="map">
              Карта
            </Button>
          </Panel>
        </View>
        <View id="services" activePanel="services">
          <Panel id="services">
            <PanelHeader>Сервисы</PanelHeader>
          </Panel>
        </View>
        <View id="messages" activePanel="messages">
          <Panel id="messages">
            <PanelHeader>Сообщения</PanelHeader>
          </Panel>
        </View>
        <View id="clips" activePanel="clips">
          <Panel id="clips">
            <PanelHeader>Клипы</PanelHeader>
          </Panel>
        </View>
        <View id="profile" activePanel="profile">
          <Panel id="profile">
            <PanelHeader>Профиль</PanelHeader>
          </Panel>
        </View>
      </Epic>
    </Panel>
  );
};

Feed.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Feed;

// export default class Feed extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeStory: "profile",
//     };
//     this.onStoryChange = this.onStoryChange.bind(this);
//   }

//   onStoryChange(e) {
//     this.setState({ activeStory: e.currentTarget.dataset.story });
//   }

//   render() {
//     return (
//
//     );
//   }
// }
