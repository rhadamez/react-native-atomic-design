import { Image, ImageProps } from "react-native";

import { styles } from '../../../pages/Feed/styles'

export function PostAvatar({...rest}: ImageProps) {
  return <Image style={styles.postAvatar} {...rest} />
}