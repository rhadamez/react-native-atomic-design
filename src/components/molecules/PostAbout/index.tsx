import { ImageSourcePropType, View } from 'react-native'

import { styles } from './styles'
import { PostLiked } from '../../atoms/PostLiked'
import { PostLikedAvatar } from '../../atoms/PostLikedAvatar'

interface Props {
  avatar: ImageSourcePropType
  likes: string
}

export function PostAbout({ avatar, likes }: Props) {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar source={avatar} />
      <PostLiked value={likes} />
    </View>
  )
}