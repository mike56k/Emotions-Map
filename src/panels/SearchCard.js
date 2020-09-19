import React from "react";
import PropTypes from "prop-types";
import {
  platform,
  Group,
  Card,
  Search,
  Header,
  CardGrid,
  Avatar,
  HorizontalScroll,
} from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Filter from "@vkontakte/icons/dist/24/filter";
import Icon24User from "@vkontakte/icons/dist/24/user";

const osName = platform();

const SearchCard = () => {
  const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 12,
  };
  return (
    <CardGrid>
      <Card size="l" mode="outline">
        <div>
          <Group>
            <Search placeholder="Поиск по теме и настроению" />
            <HorizontalScroll>
              <div style={{ display: "flex" }}>
                <div style={{ ...itemStyle, paddingLeft: 4 }}>
                  <Avatar size={64} style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: "24px" }} role="img">
                      🍿
                    </span>
                  </Avatar>
                  Фильмы
                </div>
                <div style={itemStyle}>
                  <Avatar size={64} style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: "24px" }} role="img">
                      🎧
                    </span>
                  </Avatar>
                  Музыка
                </div>
                <div style={itemStyle}>
                  <Avatar size={64} style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: "24px" }} role="img">
                      🍂
                    </span>
                  </Avatar>
                  Осень
                </div>
                <div style={itemStyle}>
                  <Avatar size={64} style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: "24px" }} role="img">
                      👔
                    </span>
                  </Avatar>
                  Работа
                </div>
                <div style={itemStyle}>
                  <Avatar size={64} style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: "24px" }} role="img">
                      😷{" "}
                    </span>
                  </Avatar>
                  Карантин
                </div>
              </div>
            </HorizontalScroll>
          </Group>
        </div>
      </Card>
    </CardGrid>
  );
};

export default SearchCard;
