import { Text, TextProps } from 'react-native'

import { styles } from '../../../pages/Feed/styles'

interface Props extends TextProps {
  value: string
}

export function PostUsername({ value, ...rest }: Props) {
  return <Text style={styles.username} {...rest}>{value}</Text>
}