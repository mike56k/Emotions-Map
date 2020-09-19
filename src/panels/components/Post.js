import React, { useEffect, useState } from "react";
import {
  CardGrid,
  Card,
  RichCell,
  Avatar,
  View,
  Panel,
  PanelHeader,
  FormLayout,
  Checkbox,
  Link,
  Div,
  Button,
  Group,
  Header,
} from "@vkontakte/vkui";
import Icon24LikeOutline from "@vkontakte/icons/dist/24/like_outline";
import Icon24ShareOutline from "@vkontakte/icons/dist/24/share_outline";
import Icon16MoreHorizontal from "@vkontakte/icons/dist/16/more_horizontal";
import bridge from "@vkontakte/vk-bridge";

const Post = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    bridge.send("VKWebAppGetUserInfo", {}).then((user) => {
      setUser(user);
    });
  });
  return (
    <CardGrid>
      <Card size="l" mode="shadow" style={{ height: 324 }}>
        {user ? (
          <RichCell before={<Avatar src={user.photo_100} size={48} />}>
            {user.first_name} {user.last_name}
          </RichCell>
        ) : (
          <RichCell before={<Avatar size={48} />}>Иван Иванов</RichCell>
        )}
        <div
          style={{
            height: 162,
            backgroundImage: `url(
              "https://foodandmood.com.ua/i/70/83/24/708324/image_main/dbb370837d641548ac7701a36adb5029-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_493.jpg"
            )`,
          }}
        ></div>
        <Div style={{ display: "flex" }}>
          <Group header={<Header mode="secondary">15 комментариев</Header>}>
            <Button style={{ marginRight: 8, backgroundColor: "transparent" }}>
              <Icon24LikeOutline style={{ color: "#99A2AD" }} />
            </Button>
            <Button style={{ marginRight: 8, backgroundColor: "transparent" }}>
              <Icon24ShareOutline style={{ color: "#99A2AD" }} />
            </Button>
          </Group>
        </Div>
      </Card>
    </CardGrid>
  );
};

export default Post;
