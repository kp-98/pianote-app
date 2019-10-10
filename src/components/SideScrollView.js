import React, {Component} from 'react';
import {View, Text, FlatList, Dimensions, ActivityIndicator,
    TouchableOpacity, TouchableHighlight,} from 'react-native';
import FastImage from 'react-native-fast-image'
import { withNavigation } from 'react-navigation';

const styles = require('../../src/assets/styles/styles.js');

class SideScrollView extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.showFooter = this.showFooter.bind(this)
        this.state = {
        }
    }
    
    checkWidth() {
        if(this.props.forceSquareThumbs == true) {
            return width_*0.225
        }
        else {
            return this.props.itemWidth
        }
    }
    showFooter() {
        if(this.props.items.length == 0) {
            return <View style={[styles.centerContent], {height:50*factor_ver}}>
                        <View style={{flex:1}}></View>
                        <ActivityIndicator 
                            size={'small'}
                            color={'grey'}
                        />
                        <View style={{flex:1}}></View>
                    </View>
        }
        else {
            return <View style={{height:10*factor_hor}}></View>
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <View style={[styles.centerContent,{flex:1,}]}>    
                    <View style={{
                        height:'20%', 
                        width:width_-20*factor_hor,
                        alignSelf:'stretch', 
                        justifyContent:'center', 
                        alignContent:'center', 
                    }}>
                        <View style={{flex:1, flexDirection:'row'}}>      
                            <Text style={{
                                textAlign:'left', 
                                fontWeight:'bold', 
                                fontSize:5+15*factor_ver, 
                                fontFamily:'avenir next'
                            }}>{this.props.Title}</Text>
                            <View style={{flex:1,}}></View>
                            <TouchableOpacity
                                style={{flex:1}}
                                onPress={() => {this.props.navigation.navigate(this.props.seeAllRoute, {firstPage:this.props.items})}}>
                                <Text style={{
                                    textAlign:'right',
                                    fontSize:10+3*factor_ver,
                                    marginRight:5*factor_hor, 
                                    fontWeight:'200', 
                                    marginTop:8*factor_ver, 
                                    color:'red',}}>See All</Text>
                            </TouchableOpacity>
                            <View style={{flex:0.1,}}></View>
                        </View>
                        <View style={{flex:0.75}}>
                            <Text style={{
                                textAlign:'left', 
                                fontWeight:'500', 
                                color:'#979797', 
                                fontSize:10+5*factor_ver, 
                                fontFamily:'avenir next'}}>{this.props.Description}</Text>
                        </View>
                    </View>
                    <View style={{height:'2%'}}></View>
                    <FlatList
                        data={this.props.items}
                        extraData={this.state}
                        horizontal={true}
                        ListFooterComponent={this.showFooter}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        renderItem={({item, index}) =>
                        <View>
                            <TouchableHighlight 
                                underlayColor={'transparent'}
                                onPress={() => {this.props.navigation.goBack()}}>
                                <View
                                    style={{width:this.checkWidth(), 
                                                height:width_*0.225,
                                                backgroundColor:'white',
                                                borderColor:'black', 
                                                borderWidth:0.25,
                                                borderRadius:15,
                                                marginRight:10*factor_hor,
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {this.props.navigation.navigate("ASSIGNMENTS")}}
                                        style={{flex:1, alignSelf:'stretch'}}
                                    >
                                        <FastImage 
                                            style={{flex:1, borderRadius:15, }}
                                            source={{uri:this.props.items[index].thumbnail}}
                                            resizeMode={FastImage.resizeMode.cover}
                                        />        
                                    </TouchableOpacity>
                                </View>
                            </TouchableHighlight>
                            <View style={{height:5}}></View>
                            <View style={{width:this.props.itemWidth,}}>
                                <Text
                                    numberOfLines={2} 
                                    style={{textAlign:'left', fontWeight:'600'}}>{this.props.items[index].title}
                                </Text>
                            </View>
                        </View>
                    }
                    />
                </View>
            </View>
        )
    }
}
export default withNavigation(SideScrollView);