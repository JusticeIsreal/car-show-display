import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import CarData from "./Cars";
import CarItem from "../CarItems";
function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={CarData}
        renderItem={({ item }) => <CarItem {...item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarsList;
