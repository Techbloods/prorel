import React, { Component } from 'react';
import { Drawer } from 'native-base';
import PropTypes from 'prop-types';
import SideBar from './sideBar';
import EmptyContent from './EmptyContent';
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
        content={<SideBar navigation={this.props.navigation} navigator={this.navigator} />}
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
         <Text>{this.props.headerTitle}</Text>
       </Body>
       <Right>
         <Button 
            onPress={()=>this.openDrawer()}
            transparent >
           <Icon name='settings' />
         </Button>
       </Right>
     </Header>
     <Content>
     {this.props.children || <EmptyContent message= "This is empty" />}
       </Content>
        </Container>
      
      </Drawer>
    );
  }
}

DrawerWrapper.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.any, 
  ]),
  children: PropTypes.oneOfType([
    PropTypes.any, PropTypes.element,
  ]).isRequired,
  headerTitle: PropTypes.oneOfType([
    PropTypes.any, 
  ]),
}

DrawerWrapper.defaultProps = {
  headerTitle: '',
}


export default DrawerWrapper;
