import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,

} from 'react-native';

import laws from '../../json/P_law.json';

class Law extends Component {
    state = { laws: [] };
    componentWillMount() {
        this.setState({ laws });
    }

    render() {

        return (
            <ScrollView>
                <View>
                {this.state.laws.map((law) => (
                    
                        <Text key={law.subtitle} style={styles.container}>
                            <Text style={styles.title}>
                            {law.title}
                            </Text>
                            <View style={styles.space}></View>
                            <Text style={styles.sub}>
                            {law.subtitle}
                            </Text>
                            <View style={styles.space}></View>
                            <Text style={styles.content}>
                            {law.content}
                            </Text>
                        </Text>
                        
                        
                    
                ))}
             </View>
            </ScrollView>
        );
    }
}

const styles={
    container:{
        flex:1,
        marginLeft:20,
        marginRight:20,
        paddingTop:30
    },
    space:{
        height:20,
        width:1000
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#73B9C3',
        marginTop:50,
        bottom:50
    },
    sub:{
        color:'#575F72',
        fontWeight:'bold',
        fontSize:18,

    },
    content:{
        color:'#777',
        lineHeight:20
    }
};

export default Law;
