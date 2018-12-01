import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";

import { ButtonGroup, Header } from "react-native-elements";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0 
        };
    }

    updateIndex = (selectedIndex) => {
        switch (selectedIndex) {
            case 0:
                this.props.navigation.navigate("Home");
                break;
            case 1:
                this.props.navigation.navigate('ToDos');
                break;
            case 2:
                this.props.navigation.navigate('ToDoForm');
                break;
        }
    }

    render() {
        const buttons = ['Home', 'View ToDos', 'Add ToDo']
        const { selectedIndex } = this.state;
        return (
                <Header 
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={{ text: "TO DO APP", style: {color: "#fff"}}}
                    rightComponent={{icon: 'home', color:"#fff"}}
                />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "space-between"
    },
  
});

export default Menu;
