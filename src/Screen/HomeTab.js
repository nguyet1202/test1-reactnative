import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const HomeTab = ({navigation}) => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: 'Sugar Substitute',
      img: require('../assets/images/slide1.png'),
      price: '',
    },
    {
      id: 1,
      name: 'Juices & Vinegars',
      img: require('../assets/images/slide1.png'),
      price: '',
    },
    {
      id: 2,
      name: 'Vitamins Medicines',
      img: require('../assets/images/slide1.png'),
      price: '',
    },
    {
      id: 3,
      name: 'denden',
      img: require('../assets/images/slide1.png'),
      price: '',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground
          source={require('../assets/images/slide3.png')}
          style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>Save extra on every order</Text>
            <Text style={styles.txt}>
              Etiam mollis metus non faucibus sollicitudin.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.product}>
        <Text style={styles.title}>Diabetic Diet</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            horizontal
            data={products}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: 110,
                    height: 162,
                    backgroundColor: '#F5F7FA',
                    borderRadius: 10,
                    marginRight: 16,
                  }}>
                  <Image
                    style={{
                      width: 110,
                      height: 100,
                    }}
                    source={item.img}
                  />
                  <Text
                    style={{
                      width: 60,
                      fontSize: 13,
                      fontWeight: '400',
                      color: '#090F47',
                      lineHeight: 18,
                    }}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailProducts');
                    }}>
                    <Text>DetailProducts</Text>
                  </TouchableOpacity>
                </View>
              );
            }}></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  banner: {
    position: 'relative',
    marginTop: 45,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  txtGroup: {
    position: 'absolute',
  },
  text: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 18,
    color: '#1987FB',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily: 'Overpass',
  },
  txt: {
    width: 124,
    height: 32,
    marginBottom: 32,
    marginLeft: 23,
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Overpass',
    color: 'rgba(9, 15, 71, 0.65)',
  },
  product: {
    flex: 1,
  },
  title: {
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  allProducts: {
    flex: 2,
  },
  titlePro: {
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  bgListProducts: {
    flex: 1,
    flexDirection: 'column',
    width: 157,
    height: 250,
    backgroundColor: '#FFFFFF',
    marginRight: 14,
    marginBottom: 16,
  },
  proName: {
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47',
  },
  proPrice: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img: {
    width: 116,
    height: 120,
    margin: 22,
  },
});
