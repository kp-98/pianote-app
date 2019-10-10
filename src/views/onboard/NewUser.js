import React, {Component} from 'react';
import {View, Text, Dimensions,} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import SideScrollView from '../../components/SideScrollView';
import { getContent } from '@musora/services';
import { ContentModel } from '@musora/models';

export default class NewUser extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
            items:[],
        }
    }

    async componentDidMount() {
        const { response, error } = await getContent({
            brand:'pianote',
            limit: '15',
            page: '1',
            sort: '-created_on',
            statuses: ['published'],
            included_types:['song'],
        });
    
        if(error) {
            console.error(error);
        }

        const newContent = response.data.data.map((data) => {
            return new ContentModel(data)
        })

        items = []
        for(i in newContent) {
            items.push({
                title: newContent[i].getField('title'),
                artist: newContent[i].getField('artist'),
                thumbnail: newContent[i].getData('thumbnail_url'),
            })
        }
        
        this.setState({
            items: items,
        })
    }

    render() {
        return (
            <View styles={{flex:1, alignSelf:'stretch',}}>
                <View style={{position:'absolute', top:350, left:20*factor_hor, height:300*factor_ver, 
                        width:350*factor_hor, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    <View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
                        <View style={{height:10}}></View>
                        <SideScrollView
                            Title={'Courses'}
                            Description={'This is a video description'}
                            seeAllRoute={'PACKUSER'}
                            items={this.state.items}
                            forceSquareThumbs={false}
                            itemWidth={width_*0.375}
                        />
                    </View>
                </View>
            </View>
        )
    }
}