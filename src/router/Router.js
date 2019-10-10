import React, { Component } from "react";
import {View, Text, TouchableHighlight,
    Animated, Dimensions} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const factor_hor = Dimensions.get('window').width/375
const factor_ver = Dimensions.get('window').height/812

export default class Router extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
            a1: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
          this.state.a1,
          {
            //easing: Easing.bounce,
            toValue: 10,
            duration: 1050,
          }
        ).start();
        Animated.timing(
            this.state.a1,
            {
              //easing: Easing.bounce,
              toValue: 0,
              duration: 2050,
            }
        ).start();
    }

    render() {
        return (
            <View styles={{height:'100%', width:Dimensions.get('window').width, alignSelf:'stretch',}}>    
                <ScrollView style={{flexGrow:1, height:height_, width:width_}}>
                    <Animated.View style={{position:'absolute', borderColor:'red', borderWidth:this.state.a1, top:40*factor_ver, left:90*factor_hor, 
                        height:100*factor_hor, width:200*factor_hor, backgroundColor:'blue', justifyContent:'center', alignContent:'center'}}>
                        <Text style={{justifyContent:'center', fontSize:25, textAlign:'center', alignContent:'center', alignItems:'center'}}>Router</Text>
                    </Animated.View>
                    <View style={{position:'absolute', top:175*factor_ver, left:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightblue', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("LOGIN")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17.5, textAlign:'center', alignContent:'center', alignItems:'center'}}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:275*factor_ver, left:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightblue', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("FORGOTPASSWORD")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:15, textAlign:'center', alignContent:'center', alignItems:'center'}}>Forgot Password</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:375*factor_ver, left:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgreen', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("CATALOG")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:15, textAlign:'center', alignContent:'center', alignItems:'center'}}>Catalog</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:475*factor_ver, left:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgreen', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("DOWNLOADS")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:13, textAlign:'center', alignContent:'center', alignItems:'center'}}>Downloads</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:575*factor_ver, left:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgreen', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("LEARNINGPATH")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:15, textAlign:'center', alignContent:'center', alignItems:'center'}}>Learning Path</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:675*factor_ver, left:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgreen', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("LESSONS")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17, textAlign:'center', alignContent:'center', alignItems:'center'}}>Lessons</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:175*factor_ver, right:150*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgreen', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("OVERVIEW")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:15, textAlign:'center', alignContent:'center', alignItems:'center'}}>Overview</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:275*factor_ver, right:150*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgreen', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("PACKS")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17, textAlign:'center', alignContent:'center', alignItems:'center'}}>Packs</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:375*factor_ver, right:150*factor_hor,
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgreen', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("SEARCH")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17, textAlign:'center', alignContent:'center', alignItems:'center'}}>Search</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:475*factor_ver, right:150*factor_hor,
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightpink', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("PRIVACY")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17, textAlign:'center', alignContent:'center', alignItems:'center'}}>Privacy</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:575*factor_ver, right:150*factor_hor,
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightpink', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("TERMS")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17, textAlign:'center', alignContent:'center', alignItems:'center'}}>Terms</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:675*factor_ver, right:150*factor_hor,
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgrey', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("NEWUSER")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:15, textAlign:'center', alignContent:'center', alignItems:'center'}}>NewUser</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:175*factor_ver, right:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgrey', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("PACKUSER")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:15, textAlign:'center', alignContent:'center', alignItems:'center'}}>PackUser</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:275*factor_ver, right:20*factor_hor, 
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'lightgrey', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("SUBSCRIBER")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:13, textAlign:'center', alignContent:'center', alignItems:'center'}}>Subscriber</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:375*factor_ver, right:20*factor_hor,
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'cadetblue', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("LOGINCREDENTIALS")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:13, textAlign:'center', alignContent:'center', alignItems:'center'}}>Login Credentials</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:475*factor_ver, right:20*factor_hor,
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'cadetblue', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("MEMBERSHIP")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:12, textAlign:'center', alignContent:'center', alignItems:'center'}}>Membership</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:575*factor_ver, right:20*factor_hor,
                        height:75*factor_hor, width:75*factor_hor, backgroundColor:'cadetblue', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("NOTIFICATIONS")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:12, textAlign:'center', alignContent:'center', alignItems:'center'}}>Notifications</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:675*factor_ver, right:20*factor_hor,
                        height:35*factor_ver, width:75*factor_hor, backgroundColor:'cadetblue', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("PROFILE")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17, textAlign:'center', alignContent:'center', alignItems:'center'}}>Profile</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{position:'absolute', top:715*factor_ver, right:20*factor_hor,
                        height:35*factor_ver, width:75*factor_hor, backgroundColor:'cadetblue', justifyContent:'center', alignContent:'center'}}>
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate("SUPPORT")}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{justifyContent:'center', fontSize:17, textAlign:'center', alignContent:'center', alignItems:'center'}}>Support</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }
}