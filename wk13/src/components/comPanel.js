import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    LayoutAnimation,
    TouchableWithoutFeedback,
    UIManager,
    Animated,
    Dimensions,
    PanResponder

} from 'react-native';

import { Card } from 'react-native-elements';

class QAPanel extends Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        this.state = { change:false,height: this.props.expanded ? null : 0, position }
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            //onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: (this.onShouldDrag),
            onPanResponderMove: (event, gesture) => {
                this.state.position.setValue({ x: gesture.dx });
            },
            onPanResponderRelease: this.onReleaseItem,
            onPanResponderTerminate: this.onReleaseItem,
        });
    }

    onShouldDrag = (event, gesture) => {
        const { dx } = gesture;
        return Math.abs(dx) > 2;
    }


    onToggle = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
        this.setState({
            height: this.state.height === null ? 0 : null,
        })
    }

    onReleaseItem = (event, gesture) => {
        let config = {
            toValue: { x: 0, y: 0 },
            duration: 500,
        };

        Animated.spring(
            this.state.position,
            config,
        ).start();
    }
_onPress(){
    if(this.state.change){
        this.setState({change:false});
    }else{
        this.setState({change:true});
    }
}
onChange(){
    if(this.state.change){
        return <Image  style={styles.good01} onPress={this._onPress} source={require('../styles/tumb-active.png')} />
    }else{
        return <Image  style={styles.good01} onPress={this._onPress} source={require('../styles/tumb.png')} />
    }
    
}

    render() {
        const { content, title, sub, content2, sub2, content1 } = this.props;
        const { height, position } = this.state;
        return (
            <View style={styles.shadow}>
                <Animated.View
                    style={position.getLayout()}
                    {...this.panResponder.panHandlers}
                >



                    <View
                        style={styles.main}
                    >
                        <Text style={styles.title} >
                            {title}
                        </Text>
                        <Text style={[styles.contain, { height }]} >
                            <Text style={styles.sub}>{sub}</Text>

                            <Text style={styles.content}>{content}</Text>

                            <Text style={styles.content}>{content1}</Text>

                            <Text style={styles.content}>{content2}</Text>
                        </Text>
                        <View style={styles.good}>
                            <View style={styles.goodicon}>
                            {this.onChange()}
                            </View> 
                            <View  style={styles.goodicon}>   
                            <Image style={styles.good02} source={require('../styles/message.png')} />
                            </View>
                        </View>
                    </View>


                </Animated.View>
            </View>

        );
    }
}

const styles = {
    good01:{
        height:20,
        width:20,
        
    },
    good02:{
        height:20,
        width:20,
        marginLeft:40,
    },
    good: {
        height: 40,
        backgroundColor: 'white',
        borderColor: '#dae2e5',
        borderTopWidth: 1,
        flexDirection:'row',
        paddingLeft:10,
        paddingTop:8
    },
    shadow: {

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    space: {
        height: 0,
        width: 1000
    },
    main: {
        backgroundColor: 'white',
        overflow: 'hidden',
        margin: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        color: '#73B9C3'
        //   textAlign: 'center'
    },
    sub: {
        color: '#575F72',
        fontWeight: 'bold',
        fontSize: 18,
    },
    content: {
        color: '#777',
        fontSize: 16,
        lineHeight: 32,
    },
    contain: {
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
    },
    row: {
        backgroundColor: '#ecf0f1',
        borderBottomWidth: 1,
        borderColor: '#ecf0f1',
        flexDirection: 'row',
    },
    pan: {
        flex: 1,
    }
};

export default QAPanel;
