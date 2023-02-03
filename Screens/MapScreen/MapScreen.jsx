import { View, } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../MapScreen/MapScreen.styled";


const MapScreen = ({ route }) => {
  const location = route.params.item.location;
  const placeName = route.params.item.state.place;
  console.log(route.params.item.location);
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title={placeName}
        />
      </MapView>
    </View>
  );
};


export default MapScreen;