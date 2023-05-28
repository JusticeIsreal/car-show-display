import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import styles from "./styles";

function StyledBtn(props) {
  const type = props.type;
  console.log(type);

  const backgroundColor = type === "primary" ? "black" : "white";
  const textColor = type === "primary" ? "white" : "black";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn("btn pressed");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>
          Custom Okjhgrder
        </Text>
      </Pressable>
    </View>
  );
}

export default StyledBtn;
