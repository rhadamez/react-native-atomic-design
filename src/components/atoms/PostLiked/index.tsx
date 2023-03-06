import { Text, TextProps } from 'react-native'

import { styles } from '../../../pages/Feed/styles'

interface Props extends TextProps {
  value: string
}

export function PostLiked({ value, ...rest }: Props) {
  return <Text style={styles.likes} {...rest}>{value}</Text>
}