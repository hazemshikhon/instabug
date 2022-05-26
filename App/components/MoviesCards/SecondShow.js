import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors, fonts, imageBaseUrl } from "../../config/Constants";
import moment from "moment";

function SecondShow({ item, language }) {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      elevation: 3,
      shadowColor: "#B7B7B72F",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      marginHorizontal: 3,
      borderRadius: 15,
      backgroundColor: colors.white,
    },
    subContainer: {
      flex: 2,
      marginHorizontal: 10,
      paddingVertical: 12,
    },
    poster: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      flex: 1,
      height: 220,
      resizeMode: "cover",
    },
    title: {
      color: colors.red,
      lineHeight: 22,
      fontFamily: language == "ar" ? fonts.AB : fonts.PB,
      textAlign: language == "ar" ? "right" : "left",
    },
    date: {
      color: colors.orange,
      lineHeight: 22,
      fontFamily: language == "ar" ? fonts.AB : fonts.PB,
      textAlign: language == "ar" ? "right" : "left",
    },
    overview: {
      color: colors.lightGray,
      lineHeight: 19,
      fontFamily: language == "ar" ? fonts.AL : fonts.PL,
      fontSize: 13,
      marginTop: 15,
      textAlign: language == "ar" ? "right" : "left",
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${imageBaseUrl}${item.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>
          {moment(item.release_date).format("DD-MM-YYYY")}
        </Text>

        <Text style={styles.overview}>{item.overview}</Text>
      </View>
    </View>
  );
}

export default SecondShow;
