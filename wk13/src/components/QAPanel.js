import React, { Component } from 'react';
import {
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
        this.state = { height: this.props.expanded ? null : 0, position }
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


    render() {
        const { content, title, sub, content2, sub2, content1 } = this.props;
        const { height, position } = this.state;
        return (
            <View style={styles.shadow}>
            <Animated.View
                style={position.getLayout()}
                {...this.panResponder.panHandlers}
            >
                <TouchableWithoutFeedback
                
                    onPress={() => this.onToggle()}
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

                            <Text style={styles.sub}>{sub2}</Text>

                            <Text style={styles.content}>{content2}</Text>
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
            </View>
        );
    }
}

const styles = {
    shadow:{
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
