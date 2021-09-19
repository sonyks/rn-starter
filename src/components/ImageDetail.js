import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({title, imageSource, score}) => {
    return (
        <View>
            <Image source={imageSource}></Image>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>Image score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;