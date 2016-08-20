'use strict';
import React,{
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class ImageResource extends Component {
  render(){
    let pic = {
      uri: 'https://s-media-cache-ak0.pinimg.com/236x/ed/d7/a8/edd7a88bfd09eed359eea17f2a0467dd.jpg'
    }
    return(
      <Image source={pic} style={{width:200, height:200}} />
    )
  }
}

// Main App
class MainApp extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <ImageResource />
      </View>
    );
  }
}
// Global Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reaction',()=> MainApp);
