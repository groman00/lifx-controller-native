import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import useLinking from './navigation/useLinking';
import { AppProvider } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

export default function App(props) {
  // const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  // const [initialNavigationState, setInitialNavigationState] = React.useState();
  // const containerRef = React.useRef();
  // const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  // React.useEffect(() => {
  //   async function loadResourcesAndDataAsync() {
  //     try {
  //       SplashScreen.preventAutoHide();

  //       // Load our initial navigation state
  //       setInitialNavigationState(await getInitialState());

  //       // Load fonts
  //       await Font.loadAsync({
  //         ...Ionicons.font,
  //         'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //       });
  //     } catch (e) {
  //       // We might want to provide this error information to an error reporting service
  //       console.warn(e);
  //     } finally {
  //       setLoadingComplete(true);
  //       SplashScreen.hide();
  //     }
  //   }

  //   loadResourcesAndDataAsync();
  // }, []);

  // if (!isLoadingComplete && !props.skipLoadingScreen) {
  //   return null;
  // } else {
    return (
      <AppProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/* <NavigationContainer ref={containerRef} initialState={initialNavigationState}> */}
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </AppProvider>
    );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
