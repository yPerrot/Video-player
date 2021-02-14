import React from 'react';
import PropTypes from "prop-types"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'

export class Map extends React.Component {
      
    static propTypes = {
        waypoints: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    render(props) {

        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });

        L.Marker.prototype.options.icon = DefaultIcon;

        return(
            <div class="map">
                <MapContainer center={[this.props.waypoints[0].lat, this.props.waypoints[0].lng]} zoom={4} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.props.waypoints.map(point => (
                        <Marker key={point.label} eventHandlers={{click: () => this.props.onClick(point.timestamp)}} position={[point.lat, point.lng]}>
                            <Popup>
                            {point.label}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        )
    }

}