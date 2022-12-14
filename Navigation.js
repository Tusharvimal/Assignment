import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import Colors from './Colors/Colors';

const Stack = createStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.headerColor
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: '100'
                }
            }}>
                <Stack.Screen
                    name='FirstScreen'
                    component={FirstScreen}
                />
                <Stack.Screen name="SecondScreen" component={SecondScreen}
                    options={({ route }) => ({
                        headerTitle: route.params.title
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation