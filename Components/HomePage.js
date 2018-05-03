import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import About from './About';
// import WordMatch from './WordMatch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    width: '80%',
  },
  text: {},
});

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
    };
  }

  static navigationOptions = {
    title: 'Welcome',
  }

  componentDidMount() {
      Keyboard.dismiss();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#8CAOD7', '#9D79BC', '#A14DAO']} style={styles.linearGradient}>

        <View style={styles.textContainer}>
            <Text style={{ color: '#7E1F86' }}> Choose an activity: </Text>
        </View>
        </LinearGradient>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button
                    onPress={() => {
                        navigate('About');
                    }}
                    title="About"
                    color="#91C4F2"
                    accessibilityLabel="about page"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => {
                        navigate('WordMatch');
                    }}
                    title="Match Words"
                    color="#91C4F2"
                    accessibilityLabel="match words"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => {
                        navigate('ToEnglish');
                    }}
                    title="Translate to English"
                    color="#91C4F2"
                    accessibilityLabel="translate to english"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => {
                        navigate('ToElvish');
                    }}
                    color="#91C4F2"
                    title="Translate to Elvish"
                    accessibilityLabel="translate to elvish"
                />
            </View>
        </View>
      </View>
    );
  }
}
