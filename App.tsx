import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { RootNavigator } from './src/navigators';

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
