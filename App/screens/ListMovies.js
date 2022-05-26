import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { baseUrl, colors } from "../config/Constants";
import getData from "../helpers/getData";
import FirstShow from "../components/MoviesCards/FirstShow";
import SecondShow from "../components/MoviesCards/SecondShow";

const ListMovies = ({}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshed, setRefreshed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const [showWay, setShowWay] = useState(1);

  useEffect(() => {
    fetchMovies();

    setLoading(false);
  }, [page, refreshed, language]);

  const fetchMovies = () => {
    getData(`${baseUrl}&page=${page}&language=${language}`)
      .then((response) => {
        setData(data.concat(response.data.results));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
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
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            setShowWay(showWay == 1 ? 2 : 1);
          }}
          style={[
            styles.languageButton,
            {
              alignSelf: language == "en" ? "flex-start" : "flex-end",
            },
          ]}
        >
          <Text style={styles.text}>Chenge Language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setRefreshed(!refreshed);
            setData([]);
            setPage(1);
            setLanguage(language === "en" ? "ar" : "en");
          }}
          style={{
            borderRadius: 10,
            backgroundColor: colors.lightred,
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: language == "en" ? "flex-start" : "flex-end",
            marginTop: 20,
          }}
        >
          <Text style={styles.text}>{language.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ flex: 1 }}
        onRefresh={() => setRefreshed(!refreshed)}
        refreshing={loading}
        onEndReached={fetchMoreMovies}
        onEndReachedThreshold={0.2}
        data={data}
        renderItem={MovieItem}
        keyExtractor={(item, i) => i.toString()}
        ListFooterComponent={() => {
          if (!loading)
            return <ActivityIndicator size="large" color={"black"} />;
          else return null;
        }}
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
    marginTop: 20,
  },
  text: {
    color: colors.maincolor,
    fontWeight: "bold",
  },
});
