import React, { Component } from "react";
import { Image } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
} from "native-base";
import styles from "./styles";
import drawerCover from "../../assets/drawer-cover.png";
import drawerImage from "../../assets/logo-kitchen-sink.png";
import { 
  NAV_HOME,
  NAV_MY_LEADS,
  NAV_AGENT_PROFILE_SETTINGS,
  NAV_SIGN_UP,
  NAV_BOOK_MARKS,
  NAV_CLIENT_REQUEST,
  NAV_SUBMIT_PROPERTY,
  NAV_PROPERTY_VIEW,
  NAV_Book_AppointMent,
  NAV_SUPPORT,
  NAV_CONTACT_US,
} from "../navigation/navigationScreens";

const datas = [
   {
    name: "HOME",
    route: NAV_HOME,
    icon: "home",
    bg: "#AB6AED",
  },
  {
    name: "MY BOOKMARK",
    route: NAV_BOOK_MARKS,
    icon: "bookmark",
    bg: "#C5F442"
  },
  {
    name: "MY REQUEST",
    route: NAV_CLIENT_REQUEST,
    icon: "easel",
    bg: "#C5F442"
  },
  // {
  //   name: "SUBMIT PROPERTY",
  //   route: NAV_SUBMIT_PROPERTY,
  //   icon: "phone-portrait",
  //   bg: "#477EEA",
  // },
  // {
  //   name: "MY LEADS",
  //   route: NAV_MY_LEADS,
  //   icon: "phone-portrait",
  //   bg: "#DA4437",
  // },
  // {
  //   name: "MY PROPERTIES",
  //   route: NAV_PROPERTY_VIEW,
  //   icon: "notifications",
  //   bg: "#4DCAE0"
  // },
  {
    name: "BOOK APPOINTMENT",
    route: NAV_Book_AppointMent,
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
    route: NAV_SUPPORT,
    icon: "call",
    bg: "#EB6B23"
  },
  {
    name: "CONTACT US",
    route: NAV_CONTACT_US,
    icon: "call",
    bg: "#3591FA",
  },
  {
    name: "SETTINGS",
    route: NAV_AGENT_PROFILE_SETTINGS,
    icon: "settings",
    bg: "#EF6092",
  },
  {
    name: "LOG OUT",
    route: NAV_SIGN_UP,
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