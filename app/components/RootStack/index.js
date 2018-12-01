/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import Home from "../Home";
import ToDos from "../ToDos";
import ToDoForm from "../ToDoForm";

const RootStack = createStackNavigator({
    Home: {
        screen: Home
    },
    ToDos: {
        screen: ToDos
    },
    ToDoForm : {
        screen: ToDoForm
    }
},
    {
        initialRouteName: 'Home'
    }

);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        )
        
    }
}