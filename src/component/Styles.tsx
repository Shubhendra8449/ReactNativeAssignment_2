import { StyleSheet } from "react-native";

const Styles =StyleSheet.create({
        container: {
            flex: 1
        },
        FlatBoxContainer: {
            paddingBottom: 20,
            backgroundColor: 'grey',
            borderColor: 'black',
            borderWidth: 4,
            borderRadius: 20,
            margin: 20,
            height: 130,
            padding: 10, // Added padding to give some space inside the border
          },
          row: {
            flexDirection: 'row',
          },
          image: {
            height: 100,
            width: 100,
            borderRadius: 15,
            marginRight: 10, // Adjusted margin to prevent overflow
          },
          textContainer: {
            flexDirection: 'column',
            flexShrink: 1, // Allows the text container to shrink if needed
          },
          name: {
            color: 'black',
            fontSize: 20
          },
          detail: {
            color: 'black',
            fontSize: 15,
            marginTop: 5,
         
          },
          DetailButton: {
            height: 40,
            width: 150,
            bottom:50,
            borderRadius: 17,
            backgroundColor: "green",
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: "center", // Center horizontally
        
          },
          placeholderContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        placeholderText: {
            fontSize: 18,
            color: 'gray',
            textAlign: 'center',
        },
    });
export default Styles