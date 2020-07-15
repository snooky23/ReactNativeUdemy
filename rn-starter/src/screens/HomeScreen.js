import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>AviScreen</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={()=> navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo" 
        onPress={()=> navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Screen" 
        onPress={()=> navigation.navigate('Image')}
      />
      <Button 
        title="Go to Counter Screen Demo" 
        onPress={()=> navigation.navigate('Counter')}
      />
      <Button 
        title="Go to Color Screen Demo" 
        onPress={()=> navigation.navigate('Color')}
      />
      <Button 
        title="Go to Square Screen" 
        onPress={()=> navigation.navigate('Square')}
      />
      <Button 
        title="Go to Counter Reducer" 
        onPress={()=> navigation.navigate('CounterReducer')}
      />
      <Button 
        title="Go to Text Screen" 
        onPress={()=> navigation.navigate('Text')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
