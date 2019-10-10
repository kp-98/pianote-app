import React, { Component } from "react";
import {View, Text, Dimensions,} from 'react-native';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import { getContent, ContentModel } from '@musora/services';
import Carousel from 'react-native-carousel-view';

const styles = require('../../assets/styles/styles.js');

export default class Login extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
            gestureName:'none',
            firstCircle: 'white',
            secondCircle: 'transparent',
            thirdCircle: 'transparent',
            fourthCircle: 'transparent',
            fifthCircle: 'transparent',
        }
    }

    async changeColor(number) {
        console.log(number)
        if(number == 0) {
            console.log('blue')
            await this.setState({
                firstCircle: 'white',
                secondCircle: 'transparent',
                thirdCircle: 'transparent',
                fourthCircle: 'transparent',
                fifthCircle: 'transparent',
            })
        }
        else if(number == 1) {
            console.log('red')
            await this.setState({
                firstCircle: 'transparent',
                secondCircle: 'white',
                thirdCircle: 'transparent',
                fourthCircle: 'transparent',
                fifthCircle: 'transparent',
            })
        }
        else if(number == 2) {
            console.log('purple')
            await this.setState({
                firstCircle: 'transparent',
                secondCircle: 'transparent',
                thirdCircle: 'white',
                fourthCircle: 'transparent',
                fifthCircle: 'transparent',
            })
        }
        else if(number == 3) {
            console.log('green')
            await this.setState({
                firstCircle: 'transparent',
                secondCircle: 'transparent',
                thirdCircle: 'transparent',
                fourthCircle: 'white',
                fifthCircle: 'transparent',
            })
        }
        else if(number == 4) {
            console.log('orange')
            await this.setState({
                firstCircle: 'transparent',
                secondCircle: 'transparent',
                thirdCircle: 'transparent',
                fourthCircle: 'transparent',
                fifthCircle: 'white',
            })
        }
        await console.log(
            'blue', this.state.firstCircle,
            'red', this.state.secondCircle,
            'purple', this.state.thirdCircle,
            'green', this.state.fourthCircle,
            'orange', this.state.fifthCircle,
        )
        this.forceUpdate()
    }

    render() {
    return (
        <View style={[styles.centerContent,{height:height_,}]}>
            <Carousel
                width={420}
                height={900}
                delay={3000}
                loop={true}
                hideIndicators={true}
                onPageChange={(number) => this.changeColor(number)}
            >
                {/* blue page */}
                <View style={{
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center'
                }}>
                    <View style={[styles.centerContent, {flex:0.25, backgroundColor:'blue'}]}>
                        <View style={{position:'absolute',top:70*factor_ver}}>
                            <Text style={{color:'white'}}>druemoEdge</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5,alignSelf:'stretch', backgroundColor:'blue'}}>
                        <FastImage
                            style={{flex:1,}}
                            source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{flex:0.1,alignSelf:'stretch', backgroundColor:'blue'}}></View>
                    <View style={{flex:0.1,flexDirection:'row', backgroundColor:'blue'}}>
                        <View style={{flex:1, backgroundColor:'blue'}}></View>
                        <View style={{width:115*factor_hor, backgroundColor:'blue',}}>
                            <View style={[styles.whiteBordersCircles, {left:10*factor_hor, backgroundColor:this.state.firstCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:30*factor_hor, backgroundColor:this.state.secondCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:50*factor_hor, backgroundColor:this.state.thirdCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:30*factor_hor, backgroundColor:this.state.fourthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:10*factor_hor, backgroundColor:this.state.fifthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                        </View>
                        <View style={{flex:1, backgroundColor:'blue'}}></View>
                    </View>
                    <View style={{flex:0.1,flexDirection:'row', backgroundColor:'blue'}}>
                        <View style={{flex:1, }}></View>
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>LOG IN</Text>
                            </View>
                        </View>
                        <View style={{flex:0.25}}></View>
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>SIGN UP</Text>
                            </View>
                        </View>
                        <View style={{flex:1, }}></View>
                    </View>
                    <View style={{flex:0.075,alignSelf:'stretch', backgroundColor:'blue'}}></View>
                </View>

                {/* red page */}
                <View style={{
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <View style={[styles.centerContent, {flex:0.25, backgroundColor:'red'}]}>
                    <View style={{position:'absolute',top:70*factor_ver}}>
                        <Text style={{color:'white'}}>druemoEdge</Text>
                    </View>
                    </View>
                    <View style={{flex:0.5,alignSelf:'stretch', backgroundColor:'red'}}>
                        <FastImage
                            style={{flex:1,}}
                            source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{flex:0.1,alignSelf:'stretch', backgroundColor:'red'}}></View>
                    <View style={{flex:0.1,backgroundColor:'red', flexDirection:'row',}}>
                        <View style={{flex:1, backgroundColor:'red'}}></View>
                        <View style={{width:115*factor_hor, backgroundColor:'red',}}>
                            <View style={[styles.whiteBordersCircles, {left:10*factor_hor, backgroundColor:this.state.firstCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:30*factor_hor, backgroundColor:this.state.secondCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:50*factor_hor, backgroundColor:this.state.thirdCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:30*factor_hor, backgroundColor:this.state.fourthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:10*factor_hor, backgroundColor:this.state.fifthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                        </View>
                        <View style={{flex:1, backgroundColor:'red'}}></View>
                    </View>
                    <View style={{flex:0.1,backgroundColor:'red', flexDirection:'row'}}>
                        <View style={{flex:1, }}></View>
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>LOG IN</Text>
                            </View>
                        </View>
                        
                        <View style={{flex:0.25}}></View>
                        
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>SIGN UP</Text>
                            </View>
                        </View>
                        <View style={{flex:1, }}></View>
                    </View>
                    <View style={{flex:0.075,alignSelf:'stretch', backgroundColor:'red'}}></View>
                </View>

                {/* purple page */}
                <View style={{
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <View style={[styles.centerContent, {flex:0.25, backgroundColor:'purple'}]}>
                        <View style={{position:'absolute',top:70*factor_ver}}>
                            <Text style={{color:'white'}}>druemoEdge</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5,alignSelf:'stretch', backgroundColor:'purple'}}>
                        <FastImage
                            style={{flex:1,}}
                            source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{flex:0.1,alignSelf:'stretch', backgroundColor:'purple'}}></View>
                    <View style={{flex:0.1,backgroundColor:'purple', flexDirection:'row',}}>
                        <View style={{flex:1, backgroundColor:'purple'}}></View>
                        <View style={{width:115*factor_hor, backgroundColor:'purple',}}>
                            <View style={[styles.whiteBordersCircles, {left:10*factor_hor, backgroundColor:this.state.firstCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:30*factor_hor, backgroundColor:this.state.secondCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:50*factor_hor, backgroundColor:this.state.thirdCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:30*factor_hor, backgroundColor:this.state.fourthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:10*factor_hor, backgroundColor:this.state.fifthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                        </View>
                        <View style={{flex:1, backgroundColor:'purple'}}></View>
                    </View>
                    <View style={{flex:0.1,backgroundColor:'purple', flexDirection:'row'}}>
                        <View style={{flex:1, }}></View>
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>LOG IN</Text>
                            </View>
                        </View>
                        
                        <View style={{flex:0.25}}></View>
                        
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>SIGN UP</Text>
                            </View>
                        </View>
                        <View style={{flex:1, }}></View>
                    </View>
                    <View style={{flex:0.075,alignSelf:'stretch', backgroundColor:'purple'}}></View>
                </View>

                {/* green page */}
                <View style={{
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <View style={[styles.centerContent, {flex:0.25, backgroundColor:'green'}]}>
                    <View style={{position:'absolute',top:70*factor_ver}}>
                        <Text style={{color:'white'}}>druemoEdge</Text>
                    </View>
                    </View>
                    <View style={{flex:0.5,alignSelf:'stretch', backgroundColor:'green'}}>
                        <FastImage
                            style={{flex:1,}}
                            source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{flex:0.1,alignSelf:'stretch', backgroundColor:'green'}}></View>
                    <View style={{flex:0.1,backgroundColor:'green', flexDirection:'row',}}>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                        <View style={{width:115*factor_hor, backgroundColor:'green',}}>
                            <View style={[styles.whiteBordersCircles, {left:10*factor_hor, backgroundColor:this.state.firstCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:30*factor_hor, backgroundColor:this.state.secondCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:50*factor_hor, backgroundColor:this.state.thirdCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:30*factor_hor, backgroundColor:this.state.fourthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:10*factor_hor, backgroundColor:this.state.fifthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                        </View>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                    </View>
                    <View style={{flex:0.1,backgroundColor:'green', flexDirection:'row'}}>
                        <View style={{flex:1, }}></View>
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>LOG IN</Text>
                            </View>
                        </View>
                        
                        <View style={{flex:0.25}}></View>
                        
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>SIGN UP</Text>
                            </View>
                        </View>
                        <View style={{flex:1, }}></View>
                    </View>
                    <View style={{flex:0.075,alignSelf:'stretch', backgroundColor:'green'}}></View>
                </View>
               
               {/* orange page */}
                <View style={{
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <View style={[styles.centerContent, {flex:0.25, backgroundColor:'orange'}]}>
                        <View style={{position:'absolute',top:70*factor_ver}}>
                            <Text style={{color:'white'}}>druemoEdge</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5,alignSelf:'stretch', backgroundColor:'orange'}}>
                        <FastImage
                            style={{flex:1,}}
                            source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{flex:0.1,alignSelf:'stretch', backgroundColor:'orange'}}></View>
                    <View style={{flex:0.1,backgroundColor:'orange', flexDirection:'row',}}>
                        <View style={{flex:1, backgroundColor:'orange'}}></View>
                        <View style={{width:115*factor_hor, backgroundColor:'orange',}}>
                            <View style={[styles.whiteBordersCircles, {left:10*factor_hor, backgroundColor:this.state.firstCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:30*factor_hor, backgroundColor:this.state.secondCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {left:50*factor_hor, backgroundColor:this.state.thirdCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:30*factor_hor, backgroundColor:this.state.fourthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                            <View style={[styles.whiteBordersCircles, {right:10*factor_hor, backgroundColor:this.state.fifthCircle, height:15*factor_hor,width:15*factor_hor,}]}></View>
                        </View>
                        <View style={{flex:1, backgroundColor:'orange'}}></View>
                    </View>
                    <View style={{flex:0.1,backgroundColor:'orange', flexDirection:'row'}}>
                        <View style={{flex:1, }}></View>
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>LOG IN</Text>
                            </View>
                        </View>
                        
                        <View style={{flex:0.25}}></View>
                        
                        <View style={[styles.centerContent, {flex:1, }]}>
                            <View style={[styles.centerContent, {height:25, width:'100%', backgroundColor:'transparent', 
                                    borderWidth:1.25, borderColor:'white', borderRadius:10, }]}>
                                <Text style={{color:'white', fontWeight:'600'}}>SIGN UP</Text>
                            </View>
                        </View>
                        <View style={{flex:1, }}></View>
                    </View>
                    <View style={{flex:0.075,alignSelf:'stretch', backgroundColor:'orange'}}></View>
                </View>
            </Carousel>
        </View>
    )}
}