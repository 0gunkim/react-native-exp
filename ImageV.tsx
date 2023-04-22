import { Image, StyleSheet } from 'react-native';
import { ImageSourcePropType } from 'react-native';
type PropsType = { imgBg: ImageSourcePropType };
export const ImageV: React.FC<PropsType> = ({ imgBg }) => {
      return <Image source={imgBg} style={styles.img_bg} />;
};
const styles = StyleSheet.create({
      img_bg: {
            width: 320,
            height: 440,
            borderRadius: 10,
      },
});
