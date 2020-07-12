import React from  'react'
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        {name: 'Friend 1', age: '13', id: '1'},
        {name: 'Friend 2', age: '19', id: '2'},
        {name: 'Friend 3', age: '24', id: '3'},
        {name: 'Friend 4', age: '25', id: '4'},
        {name: 'Friend 5', age: '30', id: '5'},
        {name: 'Friend 6', age: '32', id: '6'},
        {name: 'Friend 7', age: '9', id: '7'},
        {name: 'Friend 8', age: '8', id: '8'},
        {name: 'Friend 9', age: '88', id: '9'},
    ];


    return (
        <FlatList 
            data={friends} 
            renderItem={({ item }) => {
                return <Text>{item.name} - Age {item.age}</Text>;
            }}

        />
    );
};

const styles = StyleSheet.create({

});

export default ListScreen;