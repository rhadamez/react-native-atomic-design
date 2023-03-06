import { Image, ImageProps } from "react-native";

import { styles } from '../../../pages/Feed/styles'

export function PostPhoto({...rest}: ImageProps) {
  return <Image style={styles.cover} {...rest} />
}