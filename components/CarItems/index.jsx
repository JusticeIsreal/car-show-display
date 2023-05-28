import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import styles from "./styles";

function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/nikita-kachanovsky-ad_0wMHtvlU-unsplash.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitles}>Sdkhjt</Text>
      </View>
    </View>
  );
}

export default CarItem;
