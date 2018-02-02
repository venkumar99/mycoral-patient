import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';

import { CoralHeader, colors } from '../ui.js';
import { blockchainAddress } from './common';

export class DelegateAccessEntryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {'address':''};
  }

  handleDone = () => { 
    this.props.navigation.state.params.onManualEntry(this.state.address);
    this.props.navigation.dispatch(NavigationActions.back());
  }

  handleCancel = () => {
    this.props.navigation.state.params.onCancel();
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {    
    return (
      <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: colors.bg  }}>
        <CoralHeader title='Delegate Access' subtitle='Enter your delegate blockchain address'/>

        <View>
          <Text h4 style={{textAlign: 'center', marginTop: 20}}>
            Delegate blockchain address
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, paddingHorizontal: 10}}
            onChangeText={(text) => this.setState({address: text})}
            placeholder={blockchainAddress}
            returnKeyType='done'
            value={this.state.address}
          />
        </View>

        <View>
          <Button
            style={{marginBottom: 10}}
            backgroundColor={colors.green}
            icon={{name: 'check', type: 'font-awesome'}}
            title='Done'
            onPress={this.handleDone}
          />
          <Button
            style={{ marginBottom: 20 }}
            backgroundColor={colors.red}
            icon={{name: 'ios-arrow-back', type: 'ionicon'}}
            title='Back'
            onPress={this.handleCancel}
          />
        </View>

      </View>
    );
  }

}