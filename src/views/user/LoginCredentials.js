import React, {Component} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {Services, userLogin} from '@musora/services';

const styles = require('../../assets/styles/styles.js');

export default class LoginCredentials extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.state = {
            email:'',
            password:'',
        }
    }

    login = async () => {
        const { response, error } = await userLogin({
            email:this.state.email,
            password:this.state.password,
        });
    
        if(error) {
            console.error(error);
        }

        console.log(response)
    }

    render() {
        return (
            <View styles={[styles.centerContent, {flex:1, alignSelf:'stretch',}]}>
                <View style={{position:'absolute', top:200, left:95, height:100, width:200, backgroundColor:'blue', alignSelf:'stretch'}}>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={{color:'white', fontSize:30,}}>Login</Text>
                    </TouchableOpacity>    
                </View>
                <View style={{position:'absolute', top:400, left:95, height:100, width:200, backgroundColor:'red', alignSelf:'stretch'}}>
                    <TextInput 
                        placeholderTextColor={'white'}
                        placeholder={'Enter email'}
                        style={{fontSize:20}}
                        onChangeText={(text) => this.setState({ email:text})}
                    />
                </View>
                <View style={{position:'absolute', top:600, left:95, height:100, width:200, backgroundColor:'green', alignSelf:'stretch'}}>
                    <TextInput 
                        placeholderTextColor={'white'}
                        placeholder={'Enter password'}
                        keyboardType={'email-address'}
                        style={{fontSize:20}}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password:text})}
                        onSubmitEditing={this.login}
                    />
                </View>
            </View>
        )
    }
}