'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
    container: {
        flex:1, 
        alignSelf:'stretch',
    },
    centerContent: {
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'stretch',
    },
    whiteBordersCircles: {
      borderColor:'white',
      borderWidth:1.25,
      borderRadius:20,
      position:'absolute',
      bottom:0,
    },
});