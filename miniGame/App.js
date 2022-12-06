
import { StyleSheet,LinearGradient } from 'react-native';
import StartGameScreen from './screens/StartGameScreen.jsx' ;

export default function App() {
  return (
    <LinearGradient>

      <StartGameScreen/>   
   
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    
  }
});
   