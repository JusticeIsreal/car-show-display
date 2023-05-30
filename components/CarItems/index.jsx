import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StyledBtn from "../StylesBtn";
import styles from "./styles";

function CarItem({ name, tagline, image, taglineCTA }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={{
          uri: `${image}`,
        }}
        style={styles.imageBackground}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitles}>
          Starting at ${tagline}{" "}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttoncontainer}>
        <StyledBtn
          type="primary"
          content={"Custom Order"}
          onPress={() => console.log("custom ws pressed")}
        />
        <StyledBtn
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => console.log("existing waspressed")}
        />
      </View>
    </View>
  );
}

export default CarItem;
