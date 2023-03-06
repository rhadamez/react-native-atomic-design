import { Image, ImageProps } from "react-native";

import { styles } from '../../../pages/Feed/styles'

export function PostLikedAvatar({...rest}: ImageProps) {
  return <Image style={styles.cover} {...rest} />
}