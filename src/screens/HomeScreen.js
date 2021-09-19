import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
  <View>
    <Text style={styles.text}>Hello there!</Text>
    <Button 
      title="Go to Components demo" 
      onPress={(element) => { props.navigation.navigate('Components'); }}></Button>
    <Button 
      title="Go to List demo" 
      onPress={(element) => { props.navigation.navigate('List'); }}></Button>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
