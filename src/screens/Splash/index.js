import React from 'react';
import {View, Text, Button} from 'react-native';

const Splash = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Splash!</Text>
            <Button
                onPress={() => navigation.navigate('Home')} 
                title="Ir a Home"
            />
        </View>
    );
}

export default Splash;