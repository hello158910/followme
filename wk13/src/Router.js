import React from 'react';
import { StackNavigator, TabNavigator, TabView } from 'react-navigation';
import { Button, Linking } from 'react-native';
import { Icon, Tile } from 'react-native-elements';

import MainPage from './components/MainPage';

import Sort from './components/Sort';
import Category from './components/Category';

import Collection from './components/Collection';
import Theme from './components/Theme';


import Topic from './components/Unit/Topic';
import Law from './components/Unit/Law';
import QA from './components/Unit/QA';
import Comment from './components/Unit/Comment';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';



export const MainPageStack = StackNavigator({
  List: {
    screen: MainPage,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: 'FollowMe',
        titleStyle: { color: 'white' },
        style: { backgroundColor: '#73B9C3' },
      }),
    },
  },
  Theme: {
    screen: Theme,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
        tintColor: 'white',
        titleStyle: { color: 'white' },
        style: { backgroundColor: '#73B9C3' },
        right: (
          <Icon
            name='favorite-border'
            color='white'
          />
        ),
      })
    },
  },
  /*Details: {
    screen: PageTwo,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
        tintColor: 'white',
        titleStyle: { color: 'white' },
        style: { backgroundColor: '#73B9C3' },
        right: (
          <Icon
            name='favorite-border'
            color='white'
          />
        ),
      })
    },
  },*/
});

export const SortStack=StackNavigator({
  Sort:{
    screen:Sort,
    navigationOptions:{
      header:({navigate})=>({
        title:'Sorts',
        titleStyle:{color:'white'},
        style:{backgroundColor:'#73B9C3'}
      })
    }
  },
  Category:{
    screen:Category,
    navigationOptions:{
      header:({state})=>({
        title:`${state.params.title.toUpperCase()}`,
        tintColor:'white',
        style:{backgroundColor:'#73B9C3'}
      })
    }
  },
    Theme: {
    screen: Theme,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
        tintColor: 'white',
        titleStyle: { color: 'white' },
        style: { backgroundColor: '#73B9C3' },
        right: (
          <Icon
            name='favorite-border'
            color='white'
          />
        ),
      })
    },
  }
});
export const CollectionStack = StackNavigator({
  Collection: {
    screen: Collection,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: 'Collection',
        titleStyle: { color: 'white' },
        style: { backgroundColor: '#73B9C3' },
        right: (
          <Icon
            name='mode-edit'
            color='white'
            iconStyle={{ marginRight: 10 }}
          />
        ),

      })
    },
  },
  Theme: {
    screen: Theme,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
        tintColor: 'white',
        titleStyle: { color: 'white' },
        style: { backgroundColor: '#73B9C3' },
        right: (
          <Icon
            name='favorite-border'
            color='white'
          />
        ),
      })
    },
  },
});

export const TabRouter = TabNavigator({
  首頁: {
    screen: MainPageStack,

    navigationOptions: {
      tabBarLabel: '首頁',
      tabBarIcon: () => <Icon name="home" size={35} color={'white'} />
    },
  },
  Sort: {
    screen: SortStack,
    navigationOptions: {
      tabBar: {
        label: '分類',
        icon: () => <Icon name="explore" size={35} color={'white'} />
      },
    },
  },
  Collection: {
    screen: CollectionStack,
    navigationOptions: {
      tabBar: {
        label: '收藏',
        icon: () => <Icon name="favorite-border" size={35} color={'white'} />
      },
    },
  },
},
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#73B9C3',
      activeBackgroundColor: '#575F72'
    },
    animationEnabled: 'true',
    swipeEnable: 'true',
  },
);

export const ThemeTabRouter = TabNavigator({
  主題: {
    screen: Topic,
  },
  法律: {
    screen: Law,
  },
  'Q&A': {
    screen: QA,
  },
  評論: {
    screen: Comment ,
  }
},
  {
    tabBarPosition: 'top',
    swipeEnable: 'true',
    tabBarComponent: TabView.TabBarTop,
    tabBarOptions: {
      inactiveBackgroundColor: '#575F72',
      pressColor: 'white'
    }
  });
