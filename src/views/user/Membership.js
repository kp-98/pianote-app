import React, {Component} from 'react';
import {View, Text,} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Membership extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none',
            backgroundColor: 'green'
        }
    }
     
    onSwipeRight(gestureState) {
        this.props.navigation.goBack();
    }
     
    onSwipe(gestureName, gestureState) {
        const {SWIPE_RIGHT,} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_RIGHT:
            this.setState({backgroundColor: 'blue'},function(){console.log(this.state.backgroundColor)});
            break;
        }
    }

    render() {
        const config = {velocityThreshold: 0.2, directionalOffsetThreshold: 80};
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{
                position:'absolute',
                left:0, 
                top:0,
                width:50,
                height:'100%',
                }}
            >
                <View styles={{flex:1, alignSelf:'stretch',}}>
                    <View style={{position:'absolute', top:100, left:145, height:100, width:100, backgroundColor:'red',
                            justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                        <Text style={{textAlign:'center'}}>Membership</Text>
                    </View>
                    <View style={{position:'absolute', top:225, left:5, height:100, width:100, backgroundColor:'blue',
                            justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                        <TouchableHighlight underlayColor={'transparent'} onPress={() => {console.log('hello')}} style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                            <Text style={{color:'white', textAlign:'center'}}>Click to go back</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </GestureRecognizer>
        )
    }
}