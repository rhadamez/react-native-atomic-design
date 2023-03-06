import { ImageSourcePropType, View } from 'react-native'

import { styles } from '../../../pages/Feed/styles'
import { PostLiked } from '../../atoms/PostLiked'
import { PostLikedAvatar } from '../../atoms/PostLikedAvatar'

interface Props {
  avatar: ImageSourcePropType
  likes: string
}

export function PostAbout({ avatar, likes }: Props) {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar style={styles.lastLiked} source={avatar} />
      <PostLiked style={styles.likes} value={likes} />
    </View>
  )
}