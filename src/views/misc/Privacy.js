import React from 'react';
import {View, Text,} from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import { BlurView, VibrancyView } from "@react-native-community/blur";

var lastDirection = 0

export default class Privacy extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this)
        this._layoutProvider = new LayoutProvider((i) => {
            return this.state.dataProvider._data[i][0];
            }, (type, dim) => {
            switch (type) {
                case '0':
                    dim.width = 160;
                    dim.height = 50;
                    break;
                default:
                    dim.width = 160;
                    dim.height = 50;
            }
        })
        this.state = {
            data: [
                ['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['0',],['1',],['0',],['1',],['0',],
                ['1',],['0',],['1',],['0',],['1',],
                ['1',],['0',],['1',],['0',],['1',],
            ], 
            isLoaded: false,
            showNav: true,
        }
    }

    _renderRow(type, data) {
        switch (type) {
            case '0':
            return (
                <View style={{
                    width:300,
                    height:50,
                    justifyContent:'center', 
                    alignItems:'center', 
                    alignContent:'center',
                    backgroundColor:'#f7f7f7',
                    borderColor:'#ececec',
                    borderWidth:1,
                }}>
                    <View style={{
                        flexDirection:'row',
                        flex:1,
                    }}>
                        <View style={{
                            flex:1.75, 
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',        
                        }}>
                            <Text>Data: 1</Text>
                        </View>
                        <View style={{
                            flex:1, 
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',
                        }}>
                            <TouchableOpacity
                                onPress={() => console.log('hi')}
                            >
                                <Text>V</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex:1, 
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',    
                        }}>
                            <TouchableOpacity
                                onPress={() => console.log('hi')}
                            >
                                <Text>R</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex:1, 
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',    
                        }}>
                            <TouchableOpacity
                                onPress={() => console.log('hi')}
                            >
                                <Text>T</Text>  
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.25}}></View>
                    </View>
                </View>
            );
            default:
            return (
                <View style={{
                    width:300, 
                    height:50,
                    justifyContent:'center', 
                    alignItems:'center', 
                    alignContent:'center',
                    backgroundColor:'#f7f7f7',
                    borderColor:'#ececec',
                    borderWidth:1,
                }}>
                    <View style={{
                        flexDirection:'row',
                        flex:1,
                    }}>
                        <View style={{
                            flex:1.75,
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',        
                        }}>
                            <Text>Data: 2</Text>
                        </View>
                        <View style={{
                            flex:1, 
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',    
                        }}>
                            <TouchableOpacity
                                onPress={() => console.log('hi')}
                            >
                                <Text>V</Text>  
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex:1, 
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',    
                        }}>
                            <TouchableOpacity
                                onPress={() => console.log('hi')}
                            >
                                <Text>R</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex:1, 
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',    
                        }}>
                            <TouchableOpacity
                                onPress={() => console.log('hi')}
                            >
                                <Text>T</Text>  
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.25}}></View>
                    </View>
                </View>
            );
        }
    }
    handleScroll(event) {
        offset = event.nativeEvent.contentOffset.y
        console.log(offset)
        if(offset > 400) {
            if(offset - lastDirection > 50 && this.state.showNav == true) {
                // scroll down
                this.setState({showNav:false})
            }
            else if(offset - lastDirection < -50 && this.state.showNav == false) {
                // scroll up
                this.setState({showNav:true})
            }
            
            if(lastDirection - offset > 20 || lastDirection - offset < -20) {
                lastDirection = offset
            }
        }
        else if(this.state.showNav < 400) {
            if(this.state.showNav == false) {
                this.setState({showNav: true})
            }
        }
        
    }
    componentWillMount() {
        this.setState({
            dataProvider: new DataProvider((r1,r2) => {return r1 !== r2}).cloneWithRows(this.state.data)
        })
        setTimeout(() => {this.setState({isLoaded: true})}, 500);
    }

    /* 
        Trending | Subscribe | Topic
        
    */

    render() {
        return (
            <View styles={{flex:1, alignSelf:'stretch',}}>
                { this.state.showNav && (
                <BlurView
                    blurAmount={0}
                    blurType={"xlight"}
                    style={{
                        backgroundColor:'white',
                        position: 'absolute',
                        borderRadius: 4*factor_hor,
                        top: height_,//0.93,
                        right: 45,
                        zIndex: 5,
                        height: 20*factor_ver,
                        width: width_*0.7,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            flexDirection:'row',
                            height:5*factor_ver,
                            zIndex:5,
                            width:'87.5%',
                        }}>
                            <TouchableHighlight
                                hitSlop={{top: 30, bottom: 30,}}
                                onPress={() => console.log('hello')}
                                underlayColor={'transparent'}
                                style={{flex:1, zIndex:3,}}
                            >
                                <View style={{flex:1, backgroundColor:'grey'}}></View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                hitSlop={{top: 30, bottom: 30,}}
                                onPress={() => console.log('hello')}
                                underlayColor={'transparent'}
                                style={{flex:1, zIndex:3,}}
                            >
                                <View style={{flex:1, backgroundColor:'blue'}}></View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                hitSlop={{top: 30, bottom: 30,}}
                                onPress={() => console.log('hello')}
                                underlayColor={'transparent'}
                                style={{flex:1, zIndex:3,}}
                            >
                                <View style={{flex:1, backgroundColor:'grey'}}></View>
                            </TouchableHighlight>
                        </View>
                </BlurView>                
                )}
                { this.state.showNav && (
                <View 
                    style={{
                        position: 'absolute',
                        borderRadius: 8*factor_hor,
                        backgroundColor:'black',
                        top: height_*0.7,//0.93,
                        right: 45,
                        zIndex: 5,
                        height: -500*factor_ver,
                        width: width_*0.6,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                </View>
                )}

                <View style={{
                    position:'absolute', 
                    top:100, 
                    left:145, 
                    height:100, 
                    width:100, 
                    backgroundColor:'#f7f7f7',
                    justifyContent:'center', 
                    alignContent:'center', 
                    alignItems:'center'
                }}>
                    <Text style={{textAlign:'center'}}>Videos</Text>
                </View>
                <View 
                    style={{
                        position:'absolute',
                        top:200, 
                        left:50, 
                        height:500, 
                        width:300, 
                        backgroundColor:'#f7f7f7',
                    }}
                >
                    {this.state.isLoaded && (
                    <RecyclerListView
                        style={{height:500, width:300,}}
                        onScroll={(e) => this.handleScroll(e)}
                        scrollThrottle={250}
                        rowRenderer={this._renderRow}
                        //forceNonDeterministicRendering={true}
                        dataProvider={this.state.dataProvider}
                        layoutProvider={this._layoutProvider}
                        extendedState={this.state}
                    />
                    )}
                </View>
            </View>
        )
    }
}