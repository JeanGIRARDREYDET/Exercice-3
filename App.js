import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.containerG}></View>
        <View style={styles.containerR}></View>
        <View style={styles.containerB}></View>
      </View>
      <View style={styles.container}>
        <View style={styles.containerP}></View>
        <View style={styles.containerY}></View>
        <View style={styles.containerP2}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#000',
   
  },  
  container2: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: '#000',
   
  }, 
  containerG: {
    flex: 3,
    backgroundColor: '#0A0',
 paddingLeft:0,
    
    flexBasis: "auto",
  
   
  },  containerR: {
    flex: 2,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    
    flexBasis: "auto", 
    
  },  containerB: {
    flex: 1,
    backgroundColor: '#50f',
    alignItems: 'center',
    justifyContent: 'center',
   
      flexBasis: "auto",
     
  },

  containerY: {
    flex: 3,
    backgroundColor: '#FA0',
    alignItems: 'center',
    justifyContent: 'center',
   
      flexBasis: "auto",
     
  },
  containerP: {
    flex: 3,
    backgroundColor: '#909',
    alignItems: 'center',
    justifyContent: 'center',
   
      flexBasis: "auto",
     
  },  containerP2: {
    flex: 1,
    backgroundColor: '#F99',
    alignItems: 'center',
    justifyContent: 'center',
   
      flexBasis: "auto",
     
  },


});
