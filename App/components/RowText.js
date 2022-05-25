import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../config/Constants';
function RowText({
  textOne,
  textTwo,
  textOneStyle,
  textTwoStyle,
  Style,
  onPress1,
  onPress2,
}) {
  return (
    <View style={[styles.container, Style]}>
      <Text style={[styles.text, textOneStyle]} onPress={onPress1}>
        {textOne} :
      </Text>
      <Text style={[styles.text, textTwoStyle]} onPress={onPress2}>
        {textTwo}
      </Text>
    </View>
  );
}

export default RowText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: colors.font,
  },
});
