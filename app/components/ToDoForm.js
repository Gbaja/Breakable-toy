import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Alert } from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
} from 'react-native-elements';

class ToDoForm extends Component {
  state = {
    toDo: '',
    extraInfo: '',
    deadline: '',
    priority: '0'
  };

  handleTextChange = (text, target) => {
    this.setState({ [target]: text });
  };

  handleSubmit = () => {
    Alert.alert(this.state.deadline, this.state.priority);
  };

  render() {
    const { toDo, extraInfo, deadline } = this.state;

    return (
      <View>
        <Text>New to do</Text>
        <FormLabel>Task</FormLabel>
        <FormInput
          value={toDo}
          inputStyle={styles.textInput}
          onChangeText={text => this.handleTextChange(text, 'toDo')}
          underlineColorAndroid= "green"
        />
        <FormLabel>Extra info</FormLabel>
        <FormInput
          value={extraInfo}
          inputStyle={styles.textInput}
          onChangeText={text => this.handleTextChange(text, 'extraInfo')}
          underlineColorAndroid="green"
        />
        <FormLabel>Deadline</FormLabel>
        <FormInput
          value={deadline}
          inputStyle={styles.textInput}
          onChangeText={text => this.handleTextChange(text, 'deadline')}
          underlineColorAndroid="green"
        />
        <Picker
          selectedValue={this.state.priority}
          style={{ height: 50, width: 100 }}
          onValueChange={itemValue =>
            this.handleTextChange(itemValue, 'priority')
          }
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
        <Button
          buttonStyle={styles.button}
          title="Add"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'green'
  },
  button: {
    backgroundColor: 'green',
  }
});
export default ToDoForm;
