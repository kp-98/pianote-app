import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { userForgotPassword } from '@musora/services';

const styles = require('../../assets/styles/styles.js');

export default class ForgotPassword extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.forgotPassword - this.forgotPassword.bind(this)
        this.state = {
            email:'',
        }
    }

    forgotPassword = async () => {
        this.textInput.clear()

        const { response, error } = await userForgotPassword({
            email:this.state.email,
        });
    
        if(error) {
            console.error(error);
        }

        console.log(response)

    }

    render() {
        return (
            <View styles={{flex:1, alignSelf:'stretch',}}>
                <View style={[styles.centerContent, {position:'absolute', top:225, left:145, height:100, width:100, backgroundColor:'blue',}]}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => {this.props.navigation.goBack()}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                        <Text style={{color:'white', textAlign:'center'}}>Click to go back</Text>
                    </TouchableHighlight>
                </View>

                <View style={{position:'absolute', top:400, left:95, height:100, width:200, backgroundColor:'red', alignSelf:'stretch'}}>
                    <TextInput 
                        placeholderTextColor={'white'}
                        placeholder={'Enter email'}
                        style={{fontSize:20}}
                        ref={input => { this.textInput = input }}
                        onChangeText={(text) => this.setState({ email:text})}
                        onSubmitEditing={this.forgotPassword}
                    />
                </View>

            </View>
        )
    }
}