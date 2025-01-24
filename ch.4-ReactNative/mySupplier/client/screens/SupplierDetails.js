import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { transformName } from '../config/helpers';
import styles from '../styles/profileStyles';
import {
    View, Platform
} from 'react-native';
import { Avatar, Button, Overlay, Text } from 'react-native-elements'


function SupplierDetails({ selectedSupplier, closeModal }) {

    if(selectedSupplier){
        return (
            <Overlay isVisible={selectedSupplier !== null} fullScreen>
                <View style={styles.container}>
                    <View style={styles.userMetaContainer}>
                        <Avatar
                            size={40}
                            rounded
                            title={transformName(selectedSupplier.name)}
                            containerStyle={{ backgroundColor: "#3d4db7" }}
                        />
                        <View style={styles.userMeta}>
                            <Text>{selectedSupplier.name}</Text>
                            <Text>{selectedSupplier.email}</Text>
                        </View>
                    </View>
                    <View style={styles.doctorInfo}>
                        <View style={styles.infoCell}>
                            <Text style={styles.infoTitle}>الاختصاص</Text>
                            <Text style={styles.infoText}>{selectedSupplier.profile.specialization}</Text>
                        </View>
                        <View style={styles.infoCell}>
                            <Text style={styles.infoTitle}>العنوان</Text>
                            <Text style={styles.infoText}>
                                {selectedSupplier.profile.address}
                            </Text>
                        </View>
                        <View style={styles.infoCell}>
                            <Text style={styles.infoTitle}>ساعات العمل</Text>
                            <Text style={styles.infoText}>
                                {selectedSupplier.profile.workingHours}
                            </Text>
                        </View>
                        <View style={styles.lastCell}>
                            <Text style={styles.infoTitle}>رقم الهاتف</Text>
                            <Text style={styles.infoText}>
                                {selectedSupplier.profile.phone}
                            </Text>
                        </View>
                    </View>
                    {selectedSupplier.latitude &&
                    <View style={styles.mapContainer}>
                        <MapView style={styles.map}
                        provider='google'
                        initialRegion={{
                            latitude: selectedSupplier.latitude,
                            longitude: selectedSupplier.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}>
                            {Platform.OS == "web" ?
                                <MapView.Marker
                                coordinate={{
                                latitude: selectedSupplier.latitude,
                                longitude: selectedSupplier.longitude,
                                }}
                            />
                            :
                                <Marker
                                coordinate={{
                                    latitude: selectedSupplier.latitude,
                                    longitude: selectedSupplier.longitude,
                                }}
                                />
                            }

                        </MapView>
                    </View>
                    }
                    <Button title="عودة" style={{marginTop: '50px'}} onPress={closeModal} />
                </View>
            </Overlay>
        )
    }



}

export default SupplierDetails;