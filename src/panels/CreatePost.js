import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import {
  View,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderContent,
  HorizontalScroll,
  Div,
  Button,
  FormLayout,
  Epic,
  Tabbar,
  TabbarItem,
  Radio,
  FormLayoutGroup,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  platform,
  IOS,
  ANDROID,
  Textarea,
  Text,
  SimpleCell,
  Avatar,
} from "@vkontakte/vkui";
import Icon16User from "@vkontakte/icons/dist/16/user";
import Icon24Dismiss from "@vkontakte/icons/dist/24/dismiss";
import Icon16DropDown from "@vkontakte/icons/dist/16/dropdown";
import Icon48WritebarSend from "@vkontakte/icons/dist/48/writebar_send";
import Icon16Recent from "@vkontakte/icons/dist/16/recent";
import Icon28PictureOutline from "@vkontakte/icons/dist/28/picture_outline";
import Icon28MusicOutline from "@vkontakte/icons/dist/28/music_outline";
import Icon28MoreHorizontal from "@vkontakte/icons/dist/28/more_horizontal";
import Icon28SettingsOutline from "@vkontakte/icons/dist/28/settings_outline";
import Icon28NewsfeedOutline from "@vkontakte/icons/dist/28/newsfeed_outline";
import Icon28ChevronDownOutline from "@vkontakte/icons/dist/28/chevron_down_outline";
import Icon24Done from "@vkontakte/icons/dist/24/done";
import Icon24Cancel from "@vkontakte/icons/dist/24/cancel";

import Post from "./components/Post";
import { Icon24VideoFillNone } from "@vkontakte/icons";
import "./Create_Post.css";
const MODAL_PAGE_FILTERS = "filters";
const osName = platform();

const CreatePost = ({ id, go, fetchedUser }) => {
  const [text, setText] = useState("");
  const [popout, setPopout] = useState(null);
  const [modalHistory, setModalHistory] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    bridge.send("VKWebAppGetUserInfo", {}).then((user) => {
      setUser(user);
    });
  });

  return (
    <Panel id={id}>
      {/* <View activePanel="context"> */}
      <Panel id="context" style={{ position: "relative", height: "92vh" }}>
        {user ? (
          <PanelHeader
            left={<Icon24Dismiss />}
            right={
              <PanelHeaderButton
                onClick={go}
                data-to="feed"
                style={{ marginRight: "90px" }}
              >
                <Icon48WritebarSend />
              </PanelHeaderButton>
            }
          >
            <PanelHeaderContent>
              <SimpleCell before={<Avatar src={user.photo_100} size={48} />}>
                {user.first_name}
              </SimpleCell>
            </PanelHeaderContent>
          </PanelHeader>
        ) : (
          <PanelHeader
            left={<Icon24Dismiss />}
            right={
              <PanelHeaderButton onClick={go} data-to="feed">
                <Icon48WritebarSend />
              </PanelHeaderButton>
            }
          >
            <PanelHeaderContent>{"Добавление поста"}</PanelHeaderContent>
          </PanelHeader>
        )}

        <Div>
          <FormLayout>
            <textarea
              rows="12"
              style={{
                overflow: "hidden",
                fontFamily: "inherit",
                fontSize: "24px",
              }}
              placeholder="Что у Вас нового?"
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </FormLayout>
        </Div>
        <Div>
          <HorizontalScroll>
            <Div
              style={{
                display: "flex",
              }}
            >
              <Button
                className="outline_Button"
                before={<Icon16User />}
                after={<Icon16DropDown />}
                mode="outline"
              >
                Видно всем
              </Button>
              <Button
                className="outline_Button"
                before={<Icon16Recent />}
                after={<Icon16DropDown />}
                mode="outline"
              >
                Сейчас
              </Button>
              <Button
                className="outline_Button"
                after={<Icon16DropDown />}
                mode="outline"
              >
                Настроение
              </Button>
              <Button
                className="outline_Button"
                after={<Icon16DropDown />}
                mode="outline"
              >
                Тематика
              </Button>
            </Div>
          </HorizontalScroll>
        </Div>
        <Epic
          tabbar={
            <Tabbar>
              <TabbarItem data-story="feed">
                <Icon28NewsfeedOutline />
              </TabbarItem>
              <TabbarItem data-story="services">
                <Icon28PictureOutline />
              </TabbarItem>
              <TabbarItem data-story="messages">
                <Icon28MusicOutline />
              </TabbarItem>
              <TabbarItem data-story="clips">
                <Icon28MoreHorizontal />
              </TabbarItem>
              <TabbarItem></TabbarItem>
              <TabbarItem data-story="profile">
                <Icon28SettingsOutline />
              </TabbarItem>
              <TabbarItem data-story="profile">
                <Icon28ChevronDownOutline />
              </TabbarItem>
            </Tabbar>
          }
        ></Epic>
      </Panel>
      {/* </View> */}
    </Panel>
  );
};
export default CreatePost;
