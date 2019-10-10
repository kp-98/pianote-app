import React, { Component } from 'react'
import {View, Text,} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Payments extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View styles={{flex:1, backgroundColor:'green', alignSelf:'stretch',}}>
                <View style={{position:'absolute', top:100, left:145, height:100, width:100, backgroundColor:'red',
                        justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    <Text style={{textAlign:'center'}}>Payments</Text>
                </View>
                <View style={{position:'absolute', top:225, left:145, height:100, width:100, backgroundColor:'blue',
                        justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => {this.props.navigation.goBack()}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                        <Text style={{color:'white', textAlign:'center'}}>Click to go back</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}