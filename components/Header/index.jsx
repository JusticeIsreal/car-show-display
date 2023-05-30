import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
// import { AiOutlineMenu } from "react-icons/ai";

function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TESLA</Text>
      {/* <AiOutlineMenu style={styles.menu} /> */}
    </View>
  );
}

export default index;
