import React, {Component} from 'react';
import {View, Text,} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Packs extends React.Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async upload() {
        let formData = new FormData();
        formData.append("file", {
            name: 'file',
            uri: '/Users/kentonpalmer/Pianote2/src/assets/img/trialVideo.mp4',
            type: 'video/mp4'
        });
        formData.append("id", "12345678");
        console.log(formData)
       
        try {
            let response = await fetch("http://127.0.0.1:5000/upload?", {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData
            });
            return await response.json();
        }
        catch (error) {
            console.log('error : ' + error);
            return error;
        }
    }

    render() {
        return (
            <View styles={{flex:1, alignSelf:'stretch',}}>
                <View style={{position:'absolute', top:100, left:145, height:100, width:100, backgroundColor:'red',
                        justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    <TouchableHighlight 
                            underlayColor={'transparent'} 
                            onPress={() => {this.upload()}} 
                            style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                        <Text style={{textAlign:'center'}}>Packs</Text>
                    </TouchableHighlight>
                </View>
                <View style={{position:'absolute', top:225, left:145, height:100, width:100, backgroundColor:'blue',
                        justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    <TouchableHighlight 
                            underlayColor={'transparent'} 
                            onPress={() => {this.props.navigation.goBack()}} 
                            style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                        <Text style={{color:'white', textAlign:'center'}}>Click to go back</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}