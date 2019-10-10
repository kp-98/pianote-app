import React, {Component} from 'react';
import {View, Text,} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Overview extends React.Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View styles={{flex:1, alignSelf:'stretch',}}>
                <View style={{flex:1,backgroundColor:'blue',}}></View>
            </View>
        )
    }
}