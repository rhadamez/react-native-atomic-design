import { Text, TextProps } from 'react-native'

import { styles } from './styles'

interface Props extends TextProps {
  value: string
}

export function PostLocation({ value, ...rest }: Props) {
  return <Text style={styles.postLocation} {...rest}>{value}</Text>
}