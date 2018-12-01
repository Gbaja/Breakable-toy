import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView
} from "react-native";

import { Button, ButtonGroup } from "react-native-elements";
import Menu from "./Menu";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      category: ""
    };
  }

  componentDidMount() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => res.json())
      .then(data =>
        this.setState({
          quote: data.quote,
          author: data.author,
          selectedIndex: 0
        })
      );
  }

  updateIndex = (selectedIndex) => {
   switch(selectedIndex) {
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
   const {selectedIndex} = this.state;
   return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <View>
        <Text style={styles.quoteText}> " {this.state.quote} "</Text>
        <Text style={styles.authorText}> {this.state.author} </Text>
      </View>
      <ButtonGroup 
       onPress={this.updateIndex}
       selectedIndex={selectedIndex}
       buttons={buttons}
       containerStyle={styles.buttonGroup} 
      />
     </SafeAreaView>
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
  heading: {
    fontSize: 30,
    paddingBottom: 20
  },
  quoteText: {
    fontSize: 24,
    color: "#18BC26"
  },
  authorText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: "#68CD68"
  },
  buttonGroup: {
   height: 100,
   width: "100%",
   marginLeft: 0
  }
});

export default Home;
