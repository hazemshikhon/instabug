import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { baseUrl, colors } from "../config/Constants";
import getData from "../helpers/getData";
import FirstShow from "../components/MoviesCards/FirstShow";
import SecondShow from "../components/MoviesCards/SecondShow";
const AR = "ar";
const EN = "en";
const ListMovies = ({}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(EN);
  const [showWay, setShowWay] = useState(1);

  useEffect(() => {
    fetchMovies();
    setLoading(false);
  }, [page, language]);

  const fetchMovies = () => {
    getData(`${baseUrl}&page=${page}&language=${language}`)
      .then((response) => {
        setData([...data, ...response.data.results]);
        setLoading(false);
      })
      .catch(function (error) {
        alert("Something Went Wrong");
      });
  };

  const MovieItem = ({ item }) =>
    showWay == 1 ? (
      <FirstShow item={item} language={language} />
    ) : (
      <SecondShow item={item} language={language} />
    );

  const fetchMoreMovies = () => {
    setLoading(true);
    let newPage = page + 1;
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text>{data.length}</Text>
      <View style={styles.buttonsConatiner}>
        <TouchableOpacity
          onPress={() => setShowWay(showWay == 1 ? 2 : 1)}
          style={styles.languageButton}
        >
          <Image
            source={require("../assets/layout.png")}
            style={[
              styles.icon,
              {
                tintColor: showWay == 1 ? colors.maincolor : colors.font,
              },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setData([]);
            setPage(1);
            setLanguage(language === EN ? AR : EN);
          }}
          style={styles.languageButton}
        >
          <Text style={styles.text}>
            {language == AR ? EN.toUpperCase() : AR.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={MovieItem}
        keyExtractor={(item, i) => i.toString()}
        onEndReached={fetchMoreMovies}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() =>
          loading && <ActivityIndicator size="large" color={"black"} />
        }
      />
    </View>
  );
};

export default ListMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FCFCFC",
  },
  languageButton: {
    borderRadius: 10,
    backgroundColor: colors.lightred,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginVertical: 10,
    marginLeft: 5,
  },
  text: {
    color: colors.maincolor,
    fontWeight: "bold",
  },
  buttonsConatiner: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    width: 28,
    height: 28,
  },
});
