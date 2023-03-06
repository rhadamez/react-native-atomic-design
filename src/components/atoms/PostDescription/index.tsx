import { Text, TextProps } from 'react-native'

import { styles } from './styles'

interface Props extends TextProps {
  value: string
}

export function PostDescription({ value, ...rest }: Props) {
  return <Text style={styles.description} {...rest}>{value}</Text>
}