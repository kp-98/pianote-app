import React from 'react';
import {View} from 'react-native';
import Assignments from '../../components/Assignments';

export default class Subscriber extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View styles={{flex:1, alignSelf:'stretch',}}>
                <View style={{position:'absolute', top:0, left:0, height:height_, width:width_,}}>
                    <Assignments
                        videoURI={require("/Users/kentonpalmer/Pianote2/src/assets/img/trialVideo.mp4")}
                        height={270}
                        width={375}
                    />
                </View>
            </View>
        )
    }
}