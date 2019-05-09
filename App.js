/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <FlatList
        data={[
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
          {
            name: 'Zhangsan',
            age: '12'
          },
          {
            name: 'lisi',
            age: '12'
          },
          {
            name: 'wangwu',
            age: '12'
          },
          {
            name: 'zhaoliu',
            age: '12'
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between',height: 30,paddingLeft: 12,paddingRight:12}}>
              <Text>姓名：{item.name}</Text>
              <Text>{item.age}岁</Text>
            </View>
          )
        }}
        onEndReached={() => { alert('到底了') }}
        onEndReachedThreshold={0.1}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
