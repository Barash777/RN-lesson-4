import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from "./src/screens/Main";
import {Provider} from "react-redux";
import {store} from "./src/store/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <View style={styles.container}>
                    <Main/>
                </View>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
