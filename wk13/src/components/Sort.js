import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Card, ButtonGroup } from 'react-native-elements';


import albums from '../json/albums.json';
import SortPanel from './SortPanel';


// Make a component
class Sort extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.setState({ albums });
    console.log(this.state);
  }


  render() {
    
    return (
      
      <ScrollView>
        {this.state.albums.map((album) => (
          <SortPanel
              key={album.title}
              album={{...album}}
              navigation={this.props.navigation}
            />
        ))}


      </ScrollView>

    );
  }
}

export default Sort;
