import { useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultPosition = [35.704308, 51.392706];

const CustomMap = ({
  onChange,
  zoom,
  latitude,
  longitude,
  style,
  freezed = true,
  errorHandler,
  withoutCurrentLocation,
  className,
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [mapZoom, setMapZoom] = useState(zoom || 16);

  const [goCurrentLocation, setGoCurrentLocation] = useState(false);

  const getCurrentLocation = async () => {
    setGoCurrentLocation(true);
    navigator.geolocation.getCurrentPosition(
      (location) => {
        if (location) {
          onChange({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
          setPosition([location.coords.latitude, location.coords.longitude]);
        }
      },
      () => errorHandler && errorHandler("خطا در دریافت موقیعت مکانی.")
    );
  };

  useEffect(() => {
    setPosition([latitude, longitude]);
  }, [latitude, longitude]);

  return (
    <div position="relative">
      <MapContainer
        id="map"
        center={position}
        zoom={mapZoom}
        style={{ ...style, position: "relative" }}
        className={"h-80"}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="نقشه اوپن استریت">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="نقشه اوپن استریت (سیاه سفید)">
            <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="نقشه گوگل (استریت)">
            <TileLayer
              url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="نقشه گوگل (ماهواره)">
            <TileLayer
              url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="نقشه گوگل (ترکیبی)">
            <TileLayer
              url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <CustomMarker
          position={position}
          setMapZoom={setMapZoom}
          onChange={(e) => {
            if (onChange) {
              if (goCurrentLocation) {
                setGoCurrentLocation(false);
              }
              onChange(e);
            }
          }}
          freezed={freezed}
          goCurrentLocation={goCurrentLocation}
          setGoCurrentLocation={setGoCurrentLocation}
        />
      </MapContainer>
      {!freezed && !withoutCurrentLocation && (
        <button
          color="secondary"
          variant="contained"
          onClick={getCurrentLocation}
          size="small"
          disableElevation
        >
          رفتن به موقعیت فعلی
        </button>
      )}
    </div>
  );
};

const CustomMarker = ({ freezed, onChange, position, goCurrentLocation }) => {
  const map = useMapEvents({
    click(e) {
      if (freezed) return;
      if (onChange) onChange(e.latlng);
    },
  });

  useEffect(() => {
    if (goCurrentLocation) {
      map.flyTo(position);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goCurrentLocation]);

  const DefaultIcon = L.icon({
    iconUrl: "/images/common/marker.svg",
  });

  return (
    <Marker icon={DefaultIcon} position={position}>
      <Popup>شما این مکان را انتخاب کرده اید</Popup>
    </Marker>
  );
};

export default CustomMap;
