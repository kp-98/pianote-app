import React, {Component} from 'react';
import {View, Text,} from 'react-native';

export default class Support extends React.Component {
    static navigationOptions = {header: null};
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            loaded:false,
        }
    }

    async componentDidMount() {
        await this.setState({
            items:[
                [8387, 0.8801204171594452],
                [8193, 0.859262444898398],
                [7004, 0.731426728308784],
                [6949, 0.7255133856574562],
                [6692, 0.6978819481776153],
                [5986, 0.6219761315987529],
                [5101, 0.5268250725728416],
                [1254, 0.11321363294269433],
                [1002, 0.08611977206751963],
                [824, 0.06698204494140415],
                [202, 0.00010751532093323298],  
            ],
        })
        for(key in this.state.items) {
            // if first then 
            if(key == 0) {
                size = 200*factor_hor              
                this.state.items[key].push(size)
                this.state.items[key].push( 0 )
                this.state.items[key].push( 0 )  
            }
            else {
                size = 125*factor_hor
                this.state.items[key].push(size)
                left = 0
                left = Number((left).toFixed(0))
                this.state.items[key].push( left )
                top = 0
                top = Number((top).toFixed(0))
                this.state.items[key].push( top )
            }
        }
        console.log(this.state.items)
        await this.setState({ loaded:true})
    }

    render() {
        return (
            <View style={{flex:1, alignSelf:'stretch'}}>
            {this.state.loaded && (
                <View style={{
                    alignSelf:'stretch', 
                    position:'relative',
                    height:'80%',
                    width:'100%',
                    top:'20%',
                    left:0
                }}>
                    {this.state.items.map((items, index) => 
                        <View key={index} style={{justifyContent:'center', alignSelf:'stretch', alignContent:'stretch'}}>
                            <View style={{
                                borderRadius:this.state.items[index][2]*0.075,
                                height:this.state.items[index][2],
                                width:this.state.items[index][2],
                                left:this.state.items[index][3],
                                top:this.state.items[index][4], 
                                backgroundColor:'red',
                                marginTop:5,
                                marginLeft:5,
                                justifyContent:'center',
                                alignContent:'center',
                                alignItems:'center',
                            }}>
                                <Text>hi</Text>
                            </View>
                  
                        </View>
                    )}
                </View>
            )}     

            <View style={{
                    borderRadius:5,
                    height:65,
                    width:65,
                    left:130,
                    top:375, 
                    position:'absolute',
                    backgroundColor:'green',
                    zIndex:2,
                    marginTop:0,
                    marginLeft:5,
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <Text>hi</Text>
            </View>    
            <View style={{
                    borderRadius:5,
                    height:40,
                    width:40,
                    left:130,
                    top:450, 
                    position:'absolute',
                    backgroundColor:'green',
                    zIndex:2,
                    marginTop:0,
                    marginLeft:5,
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <Text>hi</Text>
                </View>    
            <View style={{
                borderRadius:5,
                height:100,
                width:100,
                left:205,
                top:170, 
                position:'absolute',
                backgroundColor:'green',
                zIndex:2,
                marginTop:0,
                marginLeft:5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View> 

           <View style={{
                borderRadius:5,
                height:55,
                width:55,
                left:310,
                top:170, 
                position:'absolute',
                backgroundColor:'green',
                zIndex:2,
                marginTop:0,
                marginLeft:5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View>    
            <View style={{
                borderRadius:5,
                height:55,
                width:55,
                left:310,
                top:230, 
                position:'absolute',
                backgroundColor:'green',
                zIndex:2,
                marginTop:0,
                marginLeft:5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View>    
            <View style={{
                borderRadius:5,
                height:160,
                width:160,
                left:205,
                top:325, 
                position:'absolute',
                backgroundColor:'green',
                zIndex:2,
                marginTop:0,
                marginLeft:5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View>    
            <View style={{
                borderRadius:5,
                height:45,
                width:45,
                left:205,
                top:275, 
                position:'absolute',
                backgroundColor:'red',
                zIndex:2,
                marginTop:0,
                marginLeft:5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View>    
            <View style={{
                borderRadius:5,
                height:45,
                width:45,
                left:255,
                top:275, 
                position:'absolute',
                backgroundColor:'red',
                zIndex:2,
                marginTop:0,
                marginLeft:5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View>    
            <View style={{
                borderRadius:5,
                height:27.5,
                width:27.5,
                left:310,
                top:290, 
                position:'absolute',
                backgroundColor:'blue',
                zIndex:2,
                marginTop:0,
                marginLeft:2.5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View>    
            <View style={{
                borderRadius:5,
                height:27.5,
                width:27.5,
                left:340,
                top:290, 
                position:'absolute',
                backgroundColor:'blue',
                zIndex:2,
                marginTop:0,
                marginLeft:2.5,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center',
            }}>
                <Text>hi</Text>
            </View>    

            </View>
        )
    }
}