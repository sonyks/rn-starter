import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Hello there!</Text>
    <Button 
      title="Go to Components demo" 
      onPress={() => { navigation.navigate('Components'); }}></Button>
    <Button 
      title="Go to List demo" 
      onPress={() => { navigation.navigate('List'); }}></Button>
    <Button 
      title="Go to Image demo" 
      onPress={() => { navigation.navigate('Image'); }}></Button>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
