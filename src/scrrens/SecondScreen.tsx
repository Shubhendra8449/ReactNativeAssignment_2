

import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../component/Styles';
import CustomCheckbox from '../component/CheckBox';


const placeholderImage = 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g';


const SecondScreen = ({ navigation, route }) => {

  const { callback } = route.params;


  const [data, setData] = useState([
    { id: 1, isSelected: false, name: "Inception", detail: "Inception is a process of planting an idea in someone's mind without them realizing it, using extreme manipulation and mind control techniques.", year: 2010, image: "https://m.media-amazon.com/images/I/919mVr6ikcL._AC_UF894,1000_QL80_.jpg" },
    { id: 2, isSelected: false, name: "Interstellar", detail: "The film's visual effects, especially the black hole, are impressive and outshine other modern blockbusters. More rewarding upon repeat viewings", year: 2014, image: "https://m.media-amazon.com/images/S/pv-target-images/8f7cd92b0bb7ce2b0eae88ee539a52f23199c67131a8c15f0ecbc0d4e7194062.jpg" },
    { id: 3, isSelected: false, name: "Dunkirk", detail: "Dunkirk is a 2017 epic historical war thriller film written, directed and co-produced by Christopher Nolan that depicts the Dunkirk evacuation of World War ...", year: 2017, image: "https://m.media-amazon.com/images/M/MV5BMmE0ZmUzYzUtMzE5Ni00OGM4LWJhMjEtOWZmYWQwYzA5NDM5XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg" },
    { id: 4, isSelected: false, name: "inspect", detail: "Inception is a process of planting an idea in someone's mind without them realizing it, using extreme manipulation and mind control techniques.", year: 2010, image: "https://m.media-amazon.com/images/I/919mVr6ikcL._AC_UF894,1000_QL80_.jpg" },
    { id: 5, isSelected: false, name: "MotoJeep", detail: "The film's visual effects, especially the black hole, are impressive and outshine other modern blockbusters. More rewarding upon repeat viewings", year: 2014, image: "https://www.butlertire.com/images/gallery/Jeep/Wrangler/Jeep_Wrangler_with_20in_Moto_Metal_962_Wheels/Jeep_Wrangler_with_20in_Moto_Metal_962_Wheels_10082_19798_extra_large.jpeg" },
    { id: 6, isSelected: false, name: "Thar", detail: "Dunkirk is a 2017 epic historical war thriller film written, directed and co-produced by Christopher Nolan that depicts the Dunkirk evacuation of World War ...", year: 2017, image: "https://www.financialexpress.com/wp-content/uploads/2023/02/Mahindra-Thar-5-Door.jpg" },
  ]);

  const handleCheckboxToggle = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setData(newData)
  };

  const handleSave = () => {
    const selectedItems = data.filter((item) => item.isSelected);
    callback(selectedItems);    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{marginBottom:70}}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.FlatBoxContainer}>
              <View style={styles.row}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  onError={() => placeholderImage}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.detail} numberOfLines={3} ellipsizeMode='tail'>{item.detail}</Text>
                </View>
              </View>
            </View>
            <CustomCheckbox
              value={item.isSelected}
              onValueChange={() => handleCheckboxToggle(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
      <TouchableOpacity style={styles.DetailButton} onPress={handleSave}>
        <Text style={{ color: 'white' }}> Save Data</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SecondScreen;
