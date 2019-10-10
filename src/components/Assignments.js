import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import VidPlayer from './VidPlayer';

const styles = require('../../src/assets/styles/styles.js');
class Assignments extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
            content:[],
        }
    }

    render = () => {
        return (
            <SafeAreaView style={[styles.container, {backgroundColor:'#242222'}]}>
                <View style={[styles.centerContent, {flex:1, alignSelf:'stretch'} ]}>
                    {/* video */}
                    <View style={{flex:0.35, alignSelf:'stretch', }}>
                        <View style={{
                            position:'absolute',
                            zIndex:2,
                            backgroundColor:'black',
                            top:5*factor_ver, 
                            left:5*factor_hor,
                            width:60*factor_hor,
                            height:40*factor_hor,
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon 
                                    name="close"
                                    size={25*factor_hor}
                                    color="#ececec"
                                />
                            </TouchableOpacity>
                        </View>
                        <VidPlayer
                            videoURI={this.props.videoURI}
                            height={this.props.height}
                            width={this.props.width}
                        />
                    </View>
                    {/* notes */}
                    <View style={{flex:0.425, alignSelf:'stretch', backgroundColor:'white'}}>
                        <ScrollView style={{flexGrow:1,}}>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                            <Text style={{fontSize:20}}>Notes notes notes notes notes notes notes</Text>
                        </ScrollView>
                    </View>
                    {/* bottom buttons */}
                    <View style={{flex:0.2, alignSelf:'stretch', backgroundColor:'#242222', flexDirection:'row'}}>
                        <View style={[styles.centerContent, {flex:1.5,flexDirection:'row'}]}>
                            <View style={{flex:1}}></View>
                            <TouchableOpacity style={{flex:1}}>
                                <View style={[{
                                        height:70*factor_hor, 
                                        width:70*factor_hor, 
                                        borderRadius:100, 
                                        backgroundColor:'white'},
                                        styles.centerContent,
                                ]}>    
                                    <Icon 
                                        name="mail"
                                        size={27.5*factor_hor}
                                        color="black"
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{flex:1}}></View>
                        </View>
                        <View style={[styles.centerContent, {flex:1.5,}]}>
                            <TouchableOpacity style={[styles.centerContent, {flex:1.5,}]}>
                                <View style={[
                                    styles.centerContent,
                                    {height:110*factor_hor, 
                                    width:110*factor_hor, 
                                    borderRadius:100, 
                                    alignSelf:'center',
                                    backgroundColor:'white'},
                                ]}>
                                    <Text style={[styles.centerContent, 
                                        {color:'red', 
                                        fontWeight:'bold', 
                                        textAlign:'center', 
                                        fontSize:20*factor_hor,}]
                                    }>FINISH</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.centerContent, {flex:1.5, flexDirection:'row'}]}>
                            <View style={{flex:0.2}}></View>
                            <TouchableOpacity style={{flex:1}}>
                                <View style={[{
                                    height:70*factor_hor, 
                                    width:70*factor_hor, 
                                    borderRadius:100, 
                                    backgroundColor:'white'},
                                    styles.centerContent, 
                                ]}>
                                    <Icon 
                                        name="like2"
                                        size={27.5*factor_hor}
                                        color="black"
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{flex:1}}></View>
                        </View>
                    </View>
                    {/* buffer */}
                    <View style={{flex:0.025, alignSelf:'stretch', backgroundColor:'#242222',}}></View>
                    {/* email floating button */}
                    <View style={[
                            styles.centerContent,
                            {zIndex:3,
                            position:'absolute',
                            height:50*factor_hor,
                            width:50*factor_hor,
                            top:575,
                            right:10, 
                            opacity:1,
                            borderRadius:100,
                            borderColor:'#9b9b9b',
                            borderWidth:0.25,
                            shadowColor:'grey',
                            shadowOpacity:1,
                            shadowRadius:15,
                            backgroundColor:'#f7f7f7'}
                        ]}>
                            <Icon
                                name="mail"
                                size={25*factor_hor}
                                color="black"
                            />
                        </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default withNavigation(Assignments);