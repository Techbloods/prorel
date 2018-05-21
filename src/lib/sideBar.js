import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./styles";
import drawerCover from "../../assets/drawer-cover.png";
import drawerImage from "../../assets/logo-kitchen-sink.png";
import { NAV_HOME } from "../navigation/navigationScreens";

const datas = [
  {
    name: "HOME",
    route: NAV_HOME,
    icon: "home",
    bg: "#AB6AED",
  },
  {
    name: "MY BOOKMARK",
    route: "bookmark",
    icon: "bookmark",
    bg: "#C5F442"
  },
  {
    name: "MY REQUEST",
    route: "Actionsheet",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "SUBMIT PROPERTY",
    route: "Header",
    icon: "phone-portrait",
    bg: "#477EEA",
  },
  {
    name: "MY LEADS",
    route: "Footer",
    icon: "phone-portrait",
    bg: "#DA4437",
  },
  {
    name: "MY PROPERTIES",
    route: "NHBadge",
    icon: "notifications",
    bg: "#4DCAE0"
  },
  {
    name: "BOOK APPOINTMENT",
    route: "NHButton",
    icon: "book",
    bg: "#1EBC7C",
  },
  {
    name: "PRIVACY POLICY",
    route: "NHCard",
    icon: "keypad",
    bg: "#B89EF5",
  },
  {
    name: "SUPPORT",
    route: "support",
    icon: "support",
    bg: "#EB6B23"
  },
  {
    name: "CONTACT US",
    route: "NHDeckSwiper",
    icon: "call",
    bg: "#3591FA",
  },
  {
    name: "SETTINGS",
    route: "NHFab",
    icon: "settings",
    bg: "#EF6092",
  },
  {
    name: "LOG OUT",
    route: "log-out",
    icon: "call",
    bg: "#EFB406",
  },
  
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.textNB}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;