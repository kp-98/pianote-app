import React, {Component} from 'react';
import {Alert, View, Dimensions} from 'react-native';
import CatalogList from '../../components/CatalogList';
import { getContent } from '@musora/services';
import { ContentModel } from '@musora/models';

const styles = require('../../assets/styles/styles.js');

export default class PackUser extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.props.items = []
        this.state = {
            items: [],
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
                <View style={[styles.centerContent, {position:'absolute', top:0, height:height_, width:'100%',}]}>
                    <View style={[styles.centerContent, {flex:1,}]}>
                        <View style={{height:10,}}></View>
                        <CatalogList
                            Title={'Courses'}
                            Description={'These are some courses'}
                            seeAllRoute={'ROUTER'}
                            items={this.state.items}
                            forceSquareThumbs={false}
                            itemWidth={width_*0.25}
                        />
                    </View>
                </View>
            </View>
        )
    }
}