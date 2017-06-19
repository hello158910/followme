import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import Panel from '../comPanel';
class Comment extends Component {


    render() {

        return (
            <ScrollView 
   
  >
    <Panel
      title='梅子綠茶'
      expanded='false'
      content="我覺得告不起來"
    />
    <Panel
      title='新莊陳意涵'
      expanded='false'
      content="著作權其實抓蠻嚴的，"
      content1="只是台灣教育沒有很注重這一塊，"
      content2="很多人都很多人都無所謂的。"
    />
    <Panel
      title='怡青青青'
      expanded='true'
      content="林潔宜出來面對"
    />
    <Panel
      title='0JE'
      expanded='true'
      content="沒有人愛你"
    />
    <View>
   
     </View> 
  </ScrollView>
        );
    }
};

const styles=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
   
})


export default Comment;
