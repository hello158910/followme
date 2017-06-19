import React, { Component }  from 'react';
import { ScrollView,Text,View} from 'react-native';

// Make a component
// const LawPanel = (props) => {
//     const { title,
//         subtitle,
//         content,
//   } = props.state.params;
class LawPanel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {title,subtitle,content}=this.props;
    return (
        <ScrollView>
            <View>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <text>{content}</text>
            </View>
        </ScrollView>
    );}
};

const styles = {

};


export default LawPanel;
