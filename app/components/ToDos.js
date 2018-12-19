/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import { connect } from "react-redux";

import { addTodo } from "../redux/actions/todos";

//type Props = {};
class ToDos extends Component<Props> {

  componentDidMount(){
    this.props.addTodo({
      id: 1,
      toDo: "Build a Todo App",
      completed: true
    });
    this.props.addTodo({
      id: 2,
      toDo: "Do presentation",
      completed: false
    });
    this.props.addTodo({
      id: 3,
      toDo: "Learn react native",
      completed: false,
    })
  }

  handleChecked = id => {
    const markToDo = this.props.todos.map(item => {
      if (item.id == id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ toDos: markToDo });
  };

  handleDelete = id => {
    const filterById = this.props.todos.filter(item => item.id !== id);
    this.setState({ toDos: filterById });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ToDo</Text>
        <View>
          <FlatList
            data={this.props.todos}
            renderItem={({ item }) => (
              <View>
                <CheckBox
                  title={
                    <View style={styles.checkBoxContent}>
                      <Text
                        style={item.completed ? styles.completed : null}
                      >
                        {item.toDo} 
                      </Text>
                      <Icon
                        color="red"
                        name="trash"
                        type="font-awesome"
                        onPress={() => this.handleDelete(item.id)}
                      />
                    </View>
                  }
                  checked={item.completed}
                  onIconPress={() => this.handleChecked(item.id)}
                  containerStyle={styles.checkBoxContainter}
                />
              </View>
            )}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingRight: 20
  },
  welcome: {
    fontSize: 20,
    margin: 10
  },
  checkBoxContainter: {
    backgroundColor: "white",
    borderColor: "transparent",
  },
  checkBoxContent: { 
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  completed: {
    textDecorationLine: "line-through",
    textDecorationColor: "green",
    color: "gray",
    textDecorationStyle: "double"
  }
});

const mapStateToProps = ({todos}) => {
  //console.log(todos)
  const allIds = todos.allIds;
  const allTodos = allIds.map(id=> todos.byId[id])
  return {
    todos: allTodos
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);