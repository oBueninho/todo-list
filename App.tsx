import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDoScreen from './pages/ToDoScreen';
import BuscaCEP from './pages/BuscaCEP';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="To Do List"
          component={ToDoScreen}
        />
        <Stack.Screen 
          name="BuscaCEP"
          component={BuscaCEP}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
