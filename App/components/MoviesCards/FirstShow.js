import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors, fonts, imageBaseUrl } from "../../config/Constants";
import moment from "moment";

function FirstShow({ item, language }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${imageBaseUrl}${item.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.subContainer}>
        <Text
          style={{
            color: colors.red,
            fontFamily: language == "ar" ? fonts.AB : fonts.PB,
            textAlign: language == "ar" ? "right" : "left",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: colors.orange,
            fontFamily: language == "ar" ? fonts.AB : fonts.PB,
            textAlign: language == "ar" ? "right" : "left",
            marginTop: 9,
          }}
        >
          {moment(item.release_date).format("DD-MM-YYYY")}
        </Text>

        <Text
          style={{
            color: colors.lightGray,
            lineHeight: 22,
            fontFamily: language == "ar" ? fonts.AL : fonts.PL,
            fontSize: 13,
            marginTop: 15,
            textAlign: language == "ar" ? "right" : "left",
          }}
        >
          {item.overview}
        </Text>
      </View>
    </View>
  );
}

export default FirstShow;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    shadowColor: "#B7B7B72F",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 3,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginVertical: 10,
    flexDirection: "row",
  },
  poster: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flex: 1,
  },
  subContainer: {
    flex: 2,
    marginHorizontal: 10,
    paddingVertical: 12,
  },
});
