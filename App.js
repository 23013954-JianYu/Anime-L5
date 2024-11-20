import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginTop:30,
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  sectionHeader: {
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderWidth:1,
    justifyContent: 'center',
    flexDirection: 'row',
      marginTop: 20
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderWidth:1,
    flex:1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  itemImage: {
    width: 210, // Specify width
    height: 300, // Specify height
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    padding:10,
  }
});

const datasource = [
  {data: [
      {name:'Horimiya', image:'https://m.media-amazon.com/images/M/MV5BOGUzYmZkZjItNjI5Yi00NjllLThiMjUtYTY0MDI4M2Y0MmZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
      {name:'The angel next door spoils me rotten',image:'https://m.media-amazon.com/images/M/MV5BNDI1OWVjNGYtZmE0NC00Zjk3LWI5ZWItODYxYWU2ZGQ1OTJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'}
    ],
    genre:'ROMANCE', bgColor:'#FFB6C1', icon:'heart'},
  {data:[
      {name:'Tokyo revengers', image:'https://m.media-amazon.com/images/I/61lrEPs9o2L._AC_UF894,1000_QL80_.jpg'},
      {name:'Wind breaker', image:'https://m.media-amazon.com/images/M/MV5BNTQzNDI5OGItZDZkMy00MWQ1LWIwM2YtYzc2YWNhOGJlZWQxXkEyXkFqcGc@._V1_.jpg'}
    ],
    genre:'ACTION', bgColor:'#FF474C', icon:'hand-fist'},
];

const renderItem = ({item}) => {
  return(
      <TouchableOpacity >
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Image source={{ uri: item.image}} style={styles.itemImage}/>
        </View>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View><Button title='Add Anime'/></View>
        </View>
        <View  style={styles.itemContainer}>
          <StatusBar hidden={true}/>
          <SectionList
              sections={datasource}
              renderItem={renderItem}
              renderSectionHeader={({ section: { genre,bgColor, icon } }) => (
                  <View style={[styles.sectionHeader, {backgroundColor:bgColor}]}>
                    <Icon name={icon} size={20}/>
                    <Text style={styles.sectionHeaderText}>{genre}</Text>
                  </View>
              )}/>
        </View>
      </View>
  );
};

export default App;
