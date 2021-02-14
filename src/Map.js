import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'
import './Map.css'

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        console.log(this.props)
        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;

        return(
            <MapContainer center={[this.props.markers[0].lat, this.props.markers[0].lng]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.props.markers.map(marker => (
                    <Marker key={marker.label} eventHandlers={{click: () => this.props.onMarkerClick(marker.timestamp)}} position={[marker.lat, marker.lng]}>
                        <Popup>
                        {marker.label}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        )
    }

}