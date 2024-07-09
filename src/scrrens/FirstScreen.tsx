import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from '../component/Styles';
import { useState } from "react";

interface DataItem {
    id: number;
    isSelected: boolean;
    name: string;
    detail: string;
    image: string
  }

const FirstScreen = ({ navigation }) => {
    const [data, setData] = useState<DataItem[]>([]);

    const handleCallback = (updatedData) => {
        setData(updatedData);
    };

    const goToDetailScreen = () => {
        navigation.navigate('Second', { callback: handleCallback });
    };
    return (
        <View style={styles.container}>

            { data.length > 0 ? (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.FlatBoxContainer}>
                                <View style={styles.row}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.image}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.detail} numberOfLines={3}>{item.detail}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <View style={styles.placeholderContainer}>
                    <Text style={styles.placeholderText}>The list is empty. Please select data from the next screen.</Text>
                </View>
            )}

            <TouchableOpacity style={styles.DetailButton} onPress={goToDetailScreen}>
                <Text style={{ color: 'white' }}> Go to Detail Screen</Text>
            </TouchableOpacity>
        </View>
    );

}

export default FirstScreen