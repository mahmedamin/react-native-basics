import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem'


const placeList = (props) => {
    return (
        <FlatList data={props.places} style={{width: '100%'}} renderItem={(info)=>(
            <ListItem place={info.item} onItemPress={() => props.clickItemHandler(info.item.key)}/>
        )} />
    );
};


export default placeList;