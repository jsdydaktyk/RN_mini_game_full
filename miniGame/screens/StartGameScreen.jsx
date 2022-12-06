
import {TextInput, View , StyleSheet} from 'react-native' ;
import PrimaryButton from '../components/PrimaryButton.jsx' ;

function StartGameScreen() {

  return (
<View style={styles.inputContainer}>
  <TextInput style={styles.numberInput} maxLength={2}  
            keyboardType="number-pad"
            autoCapitalize="none" 
            autoCorrect={false}
   />
  <View style={styles.btnsContainer}>
      <View style={styles.btnContainer}> 
        <PrimaryButton> Reset </PrimaryButton>
      
        <PrimaryButton> Confirm </PrimaryButton>
     </View>
  </View>
  
</View>
  );
}

export default StartGameScreen ;

const styles = StyleSheet.create({
  inputContainer: {
    
    alignItems: 'center',
    marginTop: 100,
    padding: 10,
    marginHorizontal: 24,
    backgroundColor: '#2bb1b7',
    borderRadius: 8,
    // css boxShadow
    elevation: 5, // android
     // shadowColor, shadowOffse(width: number, height: number), shadowOpacity{: 0.23}, shadowRadius(: number)
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 25,
    borderBottomColor: '#f8e7ff',
    borderBottomWidth: 2,
    color: '#f8e7ff',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnsContainer:{
    flexDirection: 'row'
  },
  btnContainer:{
    flex:1
  }

}) ;