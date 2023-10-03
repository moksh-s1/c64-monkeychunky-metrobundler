import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import {Header} from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
      chunks:[],
      
    }
  }
  render(){
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor = {'#9c8210'}
            centerComponent={{
              text: 'Monkey Chunky',
              style: {color: '#fff',fontSize:20}
            }}
          />
          <Image
            style={styles.imageIcon}
            source={{
              uri : 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'
            }}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text)=>{
              this.setState({text:text});
            }}
            value={this.state.text}
          />
          <TouchableOpacity 
          style={styles.goButton}
          onPress={()=>{
            this.setState({chunks:db[this.state.text].chunks})
          }}
          >
            <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item)=>{
              return(
                <TouchableOpacity style={styles.chunksButton}>
                  <Text style={styles.displayText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

        </View>
      </SafeAreaProvider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon:{
    width:150,
    height:150,
    marginLeft:95,
  },
  inputBox:{
    width:'80%',
    height:40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    marginTop: 50,
    alignSelf: 'center',
  },
  goButton:{
    width: '50%',
    height:55,
    margin: 10,
    padding: 10,
    alignSelf: 'center',
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  chunksButton:{
    width: '60%',
    height:50,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText:{
    textAlign: 'center',
    fontSize: 30,
    color:"white",
  },
});
