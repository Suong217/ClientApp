import React from "react";
import { Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components";
import { Button, Searchbar } from "react-native-paper";
import { SafeArea } from "../utils/safe-area.component";
import { MaterialIcons } from "react-native-vector-icons/MaterialIcons";
const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_LAT = 10.82302;
const INITIAL_LONG = 106.62965;
const INITIAL_POSITION = {
  latitude: INITIAL_LAT,
  longitude: INITIAL_LONG,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const MapContainer = styled.View`
  flex: 1;
`;

const Map = styled(MapView)`
  height: 80%;
  width: 100%;
`;

const SearchContainer = styled.View`
  flex: 1;
`;

const Search = styled(Searchbar)`
  margin: 4px;
`;

export const BookingScreen = () => {
  return (
    <SafeArea>
      <MapContainer>
        <SearchContainer>
          <Search icon="circle-slice-8" placeholder="Current place" />
          <Search icon="map-marker" placeholder="Where to" />
        </SearchContainer>
        <Map provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION} />
        <Button buttonColor="#daa520" mode="contained" onPress={() => console.log("Pressed")}>
          Booking
        </Button>
      </MapContainer>
    </SafeArea>
  );
};
