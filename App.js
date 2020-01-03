/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import placeImage from './src/assets/pexels-photo-414612.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
    state = {
        placeName: '',
        places: [],
        selectedPlace: null
    };

    placeNameChangeHandler = (val) => {
        this.setState({
            placeName: val,
        });
    };
    placeSubmitHandler = () => {
        let placeName = this.state.placeName.trim();
        if (!placeName)
            return false;

        this.setState(prevState => {
            return {
                places: prevState.places.concat({
                    name: placeName,
                    key: Math.random(),
                    image: {
                        uri: 'https://i.ytimg.com/vi/7smahC_IAiY/maxresdefault.jpg'
                    }
                }),
                placeName: ''
            }
        })
    };

    clickItemHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            }
        });
    };

    removeItemHandler = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place) => {
                    return prevState.selectedPlace.key !== place.key;
                }),
                selectedPlace: null
            }
        });
    };

    closeModalHandler = () => {
        this.setState({
            selectedPlace: null
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail selectedPlace={this.state.selectedPlace} removeItemHandler={this.removeItemHandler}
                             closeModalHandler={this.closeModalHandler}/>
                <PlaceInput placeName={this.state.placeName} placeSubmitHandler={this.placeSubmitHandler}
                            placeNameChangeHandler={this.placeNameChangeHandler}/>
                <PlaceList places={this.state.places} clickItemHandler={this.clickItemHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fbff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
