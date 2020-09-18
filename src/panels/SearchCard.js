import React from "react";
import PropTypes from "prop-types";
import {
  platform,
  Group,
  Card,
  Header,
  CardGrid,
  Avatar,
  HorizontalScroll,
} from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
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
    <Group
      separator="hide"
      header={<Header mode="secondary">С внутренней обводкой</Header>}
    >
      <CardGrid>
        <Card size="l" mode="outline">
          <div>
            <Group
              style={{ paddingBottom: 8 }}
              header={<Header mode="secondary">Недавние</Header>}
            >
              <HorizontalScroll>
                <div style={{ display: "flex" }}>
                  <div style={{ ...itemStyle, paddingLeft: 4 }}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Элджей
                  </div>
                  <div style={itemStyle}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Ольга
                  </div>
                  <div style={itemStyle}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Сергей
                  </div>
                  <div style={itemStyle}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Илья
                  </div>
                  <div style={itemStyle}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Алексей
                  </div>
                  <div style={itemStyle}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Костя
                  </div>
                  <div style={itemStyle}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Миша
                  </div>
                  <div style={{ ...itemStyle, paddingRight: 4 }}>
                    <Avatar size={64} style={{ marginBottom: 8 }}>
                      <Icon24User />
                    </Avatar>
                    Вадим
                  </div>
                </div>
              </HorizontalScroll>
            </Group>
          </div>
        </Card>
      </CardGrid>
    </Group>
  );
};

export default SearchCard;
