import React, {Component} from 'react';
import {View, Text,  ActivityIndicator, SafeAreaView,
    TouchableOpacity, TouchableHighlight, FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { getContent } from '@musora/services';
import { ContentModel } from '@musora/models';

const styles = require('../../src/assets/styles/styles.js');
class CatalogList extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.showFooter = this.showFooter.bind(this)
        this.state = {
            page:2,
            outPosts:false,
        }
    }

    async getContent() {
        if(this.state.outPosts == false) {
            this.setState({ page:this.state.page+1})
            const { response, error } = await getContent({
                brand:'pianote',
                limit: '15',
                page: this.state.page,
                sort: '-created_on',
                statuses: ['published'],
                included_types:['song'],
            });
        
            if(error) {
                console.error(error);
            }

            if(response.data.data.length == 0) {
                this.setState({
                    outPosts:true, 
                })
            }

            const newContent = response.data.data.map((data) => {
                return new ContentModel(data)
            })

            items = []
            for(i in newContent) {
                this.props.items.push({
                    title: newContent[i].getField('title'),
                    artist: newContent[i].getField('artist'),
                    thumbnail: newContent[i].getData('thumbnail_url'),
                })
            }
        }
    }
    showFooter() {
        if(this.state.outPosts == false) {
            return <View style={[styles.centerContent], {height:75*factor_ver}}>
                        <ActivityIndicator 
                            size={'small'}
                            color={'grey'}
                        />
                    </View>
        }
        else {
            return <View style={{height:40*factor_ver}}></View>
        }
    }

    render = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.centerContent, {flex:1, backgroundColor:'white',}]}>
                    <View style={[styles.centerContent, {width:'100%', height:height_*0.05, flexDirection:'row',}]}>
                        <View style={{flex:1.5,}}>
                            <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress={() => {this.props.navigation.goBack()}} 
                                style={[styles.centerContent,{flex:1,}]}>
                                <Icon
                                    name="arrowleft"
                                    size={27.5*factor_hor}
                                    color="black"
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={[styles.centerContent, {flex:4,}]}>
                            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:15+10*factor_ver, fontFamily:'avenir next'}}>{this.props.Title}</Text>    
                        </View>
                        <View style={[styles.centerContent,{flex:1.5,}]}>
                        <View style={{height:30*factor_hor, width:30*factor_hor, borderRadius:30}}>
                            <FastImage
                                style={{flex:1, borderRadius:50,}}
                                source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                                resizeMode={FastImage.resizeMode.stretch}
                            />
                        </View>
                    </View>
                    </View>
                    <FlatList
                        data={this.props.items}
                        extraData={this.state}
                        style={{backgroundColor:'white',width:'100%'}}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={this.showFooter}
                        onEndReached={() => {this.getContent()}}
                        keyExtractor={(item, index) => index}
                        renderItem={({item, index}) =>
                        <View style={{
                            width:width_,
                            height:height_*0.12,
                            flexDirection:'row',
                            paddingLeft:10*factor_hor,
                            borderTopColor:'#ececec', 
                            borderTopWidth:1.5,
                        }}>
                            <View style={[styles.centerContent,{flex:1,}]}>
                                <TouchableOpacity
                                    underlayColor={'transparent'}
                                    onPress={() => {this.props.navigation.navigate("ASSIGNMENTS")}}
                                    style={{flex:1, justifyContent:'center',}}>
                                    <View
                                        style={{
                                            width:width_*0.3, 
                                            height:width_*0.2,
                                            backgroundColor:'white',
                                            borderColor:'black', 
                                            borderWidth:0.25,
                                            borderRadius:15,
                                            marginRight:5,
                                    }}>
                                        <FastImage 
                                            style={{flex:1, borderRadius:15,}}
                                            source={{uri:this.props.items[index].thumbnail}}
                                            resizeMode={FastImage.resizeMode.cover}
                                        />        
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <Text style={{textAlign:'left', fontWeight:'bold'}}>{this.props.items[index].title}</Text>
                                <Text 
                                    numberOfLines={2}
                                    style={{textAlign:'left', fontWeight:'300'}}>{this.props.items[index].artist}</Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <View style={{flex:1}}></View>
                                    <TouchableOpacity style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                                        <Icon 
                                            name="plus"
                                            size={30}
                                            color="#c2c2c2"
                                        />
                                    </TouchableOpacity>
                                </View>
                        </View>
                        }
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default withNavigation(CatalogList);