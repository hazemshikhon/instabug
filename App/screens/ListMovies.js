import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { baseUrl, colors } from "../config/Constants";
import getData from "../helpers/getData";
import Load from "../components/Load";
import RowText from "../components/RowText";
const ListMovies = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshed, setRefreshed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isComponentMounted = true;

    if (isComponentMounted) {
      fetchRows();
    }

    setLoading(false);
    return () => {
      isComponentMounted = false;
    };
  }, [page, refreshed]);

  const fetchRows = () => {
    console.log("ff", page);
    getData(`${baseUrl}&page=${page}`)
      .then((response) => {
        console.log("reees22", response);
        setData(data.concat(response.data.results));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const rowItem = ({ item }) => (
    <View
      style={{
        marginVertical: 30,
        backgroundColor: "white",
        elevation: 2,
        marginHorizontal: 3,
      }}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
      />
      <View style={{ margin: 10 }}>
        <RowText textOne={"Title"} textTwo={item.title} />
        {/* <RowText textOne={"Date"} textTwo={item.release_date} /> */}
        {/* <RowText textOne={'OverView'} textTwo={item.overview} /> */}

        {/* <Text style={{color: colors.font}}>{item.title}</Text>
        <Text style={{color: colors.font}}>{item.release_date}</Text> */}
        <Text style={{ color: colors.red, lineHeight: 22 }}>
          {item.overview}
        </Text>
      </View>
    </View>
  );
  const fetchMoreRows = () => {
    setLoading(true);
    let newPage = page + 1;
    setPage(newPage);
  };
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#FCFCFC" }}
    >
      <SafeAreaView />
      <FlatList
        style={{ flex: 1 }}
        onRefresh={() => setRefreshed(!refreshed)}
        refreshing={loading}
        onEndReached={fetchMoreRows}
        onEndReachedThreshold={0.2}
        data={data}
        renderItem={rowItem}
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
