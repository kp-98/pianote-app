import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = require('../assets/styles/styles.js');
class VidPlayer extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
            paused:true,
            videoLength:0,
            videoState: [0, 100],
        }
    }
    
    async ChangeVideo(e) {
        console.log(e[1], e[0])
        if(e[1] - e[0] < 0.2) {
                   
        }
        else if( e[0] !== this.state.videoState[0] && 
            e[1] == this.state.videoState[1]) {
                seconds = e[0]/100*this.state.videoLength
                this.player.seek(seconds)
        }
        else if( e[0] == this.state.videoState[0] && 
            e[1] !== this.state.videoState[1]) {
                seconds = e[1]/100*this.state.videoLength
                this.player.seek(seconds)
        }
        this.setState({videoState: e},
            function(){console.log(this.state.videoState)})
    }
    makeClip() {
        console.log(this.state.videoState, this.state.videoLength)
        marker2 = this.state.videoState[1]/100*this.state.videoLength
        marker1 = this.state.videoState[0]/100*this.state.videoLength
        vidLength = this.state.videoLength
        percentVideo = (marker2 - marker1)/vidLength
        clipLength = percentVideo*vidLength
        if(clipLength <= 1) {
            console.log('clips under 1 second are pictures', clipLength)
        }
        else if( percentVideo < 0.5) {
            console.log('make clip', percentVideo)
        }
        else {
            console.log('wut', percentVideo)
        }
    }

    render = () => {
        return (
            <View style={[styles.centerContent, {flex:1, backgroundColor:'red',}]}>       
                <View style={{
                    position:'absolute', 
                    bottom:10,
                    right:10,
                    height:30,
                    width:30,
                    zIndex:10,
                    backgroundColor:'green',
                }}>
                    <TouchableHighlight
                        style={{
                            height:30,
                            width:30,
                            zIndex:11,
                        }}
                        onPress={() => this.makeClip()}
                    >
                        <Text>hi</Text>
                    </TouchableHighlight>
                </View>
                    <Video
                        source={this.props.videoURI}
                        ref={(ref) => {this.player = ref}}
                        controls={true}
                        preload={"none"}
                        fullscreen={false}
                        minLoadRetryCount={5}
                        resizeMode={"contain"}
                        playWhenInactive={false}
                        progressUpdateInterval={500}
                        onError={e => console.log(e)}
                        paused={this.state.paused}
                        onLoad={(e) => this.setState({videoLength: e.duration})}
                        onEnd={() => this.setState({paused:true},
                            function(){console.log(this.state.paused)})}     
                        style={{
                            position:'absolute',
                            top:0, 
                            left:0,
                            height:this.props.height, 
                            width:this.props.width,
                            backgroundColor:'white',
                        }}
                    />
                <View style={{
                    position: 'absolute',
                    bottom: 35,
                    left: 50,
                    width: 280,
                    height: 0,
                    zIndex:5,
                    backgroundColor: 'white',
                    alignSelf: 'stretch',
                }}>    
                    <MultiSlider
                        min={0}
                        max={100}
                        step={0.1}
                        values={this.state.videoState}
                        touchDimensions={{ 
                            height: 10,
                            width: 50,
                            borderRadius: 15,
                            slipDisplacement: 200, 
                        }}
                        sliderLength={280}
                        trackStyle={{
                            height:10,
                            backgroundColor: '#ececec',
                            height:10,
                            marginBottom:10,
                        }}
                        selectedStyle={{
                            height:10,
                            backgroundColor: '#FFBA6F',
                            height:10,
                            marginBottom:10,
                        }}
                        markerStyle={{
                            height:15,
                            width: 10,
                            marginBottom:7.5,
                            borderRadius: 15,
                            backgroundColor:'white',
                        }}
                        onValuesChangeFinish={(e) => this.ChangeVideo(e)}
                    />
                </View>
            </View>
        )
    }
}
export default withNavigation(VidPlayer);