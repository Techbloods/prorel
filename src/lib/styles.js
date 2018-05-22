import { THEME } from "./color";

const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default {

  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  textNB: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },

  container: {
    position: 'relative',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  row: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  shadow: {
    shadowOpacity: 1,
    shadowRadius: 100,
    shadowColor: '#F7F7F7',
    elevation: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    flex: 1,
    width: '100%',
    padding: 2,
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 14,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  },
  flatList: {
    flex:0,
    width: '100%',
    backgroundColor: '#f3f3f3',
    marginBottom: 60,
  },
  filterBy: {
    flex: 0,
    borderColor: 'black',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  dataView: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  filterByText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F9D36D',
  },
  clientLead: {
    flex: 0,
    padding: 5,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 10,
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  searchfield: {
    color: 'black',
    fontSize: 18,
  },
  borderBox: {
    height: 50,
    borderRadius: 5,
    borderWidth: 0.8,
    paddingLeft:5,
    paddingRight: 5,
    borderColor: 'grey',
  },
  buttonStyle: {
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: THEME,
    height: 40,
  },
  buttonStyleText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 7,
    paddingRight: 7,
    textAlignVertical: 'center',
  },
  modalContentWrapper: {
    backgroundColor: 'white',
    width: '84%',
    height: '50.15%',
    padding: '5%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  modalcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
  },
};