import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet
} from 'react-native';

class Topic extends Component {


    render() {

        return (
            <View style={styles.container}>
                <Image style={styles.center01} source={require('../../styles/story.png')} />
                <Image style={styles.center02} source={require('../../styles/test.png')} />
            </View>
        );
    }
};

const styles=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
    center01 : {
        flex:1,
        resizeMode:'contain',
        backgroundColor:'#e98758',
    },
    center02 : {
        flex:1,
        resizeMode:'contain',
        backgroundColor:'#efb95a',
    }
})


export default Topic;
