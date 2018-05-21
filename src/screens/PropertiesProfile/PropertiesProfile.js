import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from '../../lib/sideBar';
import EmptyContent from '../../lib/EmptyContent';
import {
  Content,
  Text,
  Icon,
  Container,
  Header,
  Button,
  Body,
  Left,
  Right,
} from "native-base";

class DrawerWrapper extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {

    
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
        <Container>
        <Header>
       <Left>
       <Button transparent
              onPress={()=>this.openDrawer()}
       >
         <Icon name='menu' />
       </Button>
       </Left>
       <Body>
         <Text>SDCC Wallet</Text>
       </Body>
       <Right>
         <Button transparent>
           <Icon name='bulb' />
         </Button>
       </Right>
     </Header>
     <Content>
     <EmptyContent message= "This is empty" />
       </Content>
        </Container>
      
      </Drawer>
    );
  }
}

export default DrawerWrapper;
