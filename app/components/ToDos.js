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

import TodosQuery from "../redux/queries/todos"
import { addTodo, completeTodo, deleteTodo } from "../redux/actions/todos";

//type Props = {};
class ToDos extends Component<Props> {

  componentDidMount(){
    const { addTodo } = this.props; 
    addTodo({
      id: 1,
      toDo: "Build a Todo App",
      completed: true
    });
    addTodo({
      id: 2,
      toDo: "Do presentation",
      completed: false
    });
    addTodo({
      id: 3,
      toDo: "Learn react native",
      completed: false,
    })
  }

  render() {
    const { todos, deleteTodo, completeTodo } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ToDo</Text>
        <View>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              const todo = item
              console.log("Todo in render: ". todo)
              return (
              <View>
                <CheckBox
                  title={
                    <View style={styles.checkBoxContent}>
                      <Text
                        style={todo.completed ? styles.completed : null}
                      >
                        {todo.toDo} 
                      </Text>
                      <Icon
                        color="red"
                        name="trash"
                        type="font-awesome"
                        onPress={() => deleteTodo(todo.id)}
                      />
                    </View>
                  }
                  checked={todo.completed}
                  onIconPress={() => completeTodo(todo.id)}
                  containerStyle={styles.checkBoxContainter}
                />
              </View>
             )
          } }
            keyExtractor={item => item.id}
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

const mapStateToProps = (state) => {
  console.log("state in component: ", state)
  return {
    todos: TodosQuery.all(state),
    findTodo: (id) => TodosQuery.find(state, id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  completeTodo: (id) => dispatch(completeTodo({id})),
  deleteTodo: (id) => dispatch(deleteTodo({id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);