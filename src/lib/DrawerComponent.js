import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SideBar from './sideBar';
import EmptyContent from './EmptyContent';
import {
  // Content,
  Text,
  Icon,
  Container,
  Header,
  Button,
  Body,
  Left,
  Right,
  Drawer
} from "native-base";
import { WHITE } from './color';

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
         <Text style={{ flexGrow: 1, color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 0, marginLeft: 0, textAlign: 'left', textAlignVertical: 'center', }}>{this.props.title}</Text>
       </Body>
       <Right>
         <Button 
            onPress={()=>this.openDrawer()}
            transparent >
           <Icon name='settings' />
         </Button>
       </Right>
     </Header>
     <View style={[{flex: 1, backgroundColor: WHITE}, this.props.style]}>
     {this.props.children || <EmptyContent message= "This is empty" />}
       </View>
        </Container>
      
      </Drawer>
    );
  }
}

DrawerWrapper.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.any, 
  ]),
  style:  PropTypes.oneOfType([
    PropTypes.any, 
  ]),
  children: PropTypes.oneOfType([
    PropTypes.any, PropTypes.element,
  ]).isRequired,
  title: PropTypes.oneOfType([
    PropTypes.any, 
  ]),
}

DrawerWrapper.defaultProps = {
  title: '',
  style: [],
}


export default DrawerWrapper;
