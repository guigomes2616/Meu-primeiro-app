import { View } from 'react-native';
import React from 'react';

const Caixas = (props) => {
  return (
    <View style={{ width: '100%', height: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
      {props.exibir ?
        <View style={{ flex: 1 }}>
          <View style={{ flexGrow: 1, width: '100%', height: 50, backgroundColor: '#00f' }}></View>
          <View style={{ flexGrow: 1, width: '100%', height: 50, backgroundColor: '#00a' }}></View>
          <View style={{ flexGrow: 1, width: '100%', height: 50, backgroundColor: '#005' }}></View>
        </View>
        :
        <View style={{ flex: 1 }}>
          <View style={{ flexGrow: 1, width: '100%', height: 50, backgroundColor: '#f00' }}></View>
          <View style={{ flexGrow: 1, width: '100%', height: 50, backgroundColor: '#a00' }}></View>
          <View style={{ flexGrow: 1, width: '100%', height: 50, backgroundColor: '#500' }}></View>
        </View>
      }
    </View>
  )
}

export default Caixas;
