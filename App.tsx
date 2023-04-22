import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import img_background from './assets/background-image.png';
import Button from './Button';
import { ImageV } from './ImageV';
// const img_background = require();
export default function App() {
      return (
            <View style={styles.container}>
                  {/* <View style={styles.l_img} */}
                  {/* <Image source={img_background} style={styles.img_bg} /> */}
                  <ImageV imgBg={img_background} />
                  <Button label={'button'} />
                  <StatusBar style='auto' />
                  <View style={styles.footerContainer}>
                        <Button label='Choose a photo' />
                        <Button label='Use this photo' />
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#deb8b8',
            alignItems: 'center',
            justifyContent: 'center',
      },
      l_img: {
            // flex: 1,
            // paddingTop: 50,
      },
      img_bg: {
            width: 320,
            height: 440,
            borderRadius: 10,
      },
      footerContainer: {
            flex: 1 / 3,
            alignItems: 'center',
      },
});
