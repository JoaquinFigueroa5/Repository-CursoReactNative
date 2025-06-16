import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProductDetails" component={ProductsScreen} />
                <Stack.Screen name="cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;