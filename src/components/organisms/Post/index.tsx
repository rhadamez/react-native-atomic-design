import { Image, ImageSourcePropType, Text, View } from 'react-native'

import { styles } from '../../../pages/Feed/styles'
import { PostDescription } from '../../atoms/PostDescription';
import { PostPhoto } from '../../atoms/PostPhoto';
import { PostAbout } from '../../molecules/PostAbout';
import { PostHeader } from '../../molecules/PostHeader';
import { PostOptions } from '../../molecules/PostOptions';

type Profile = {
  id: string
  name: string
  avatar: ImageSourcePropType
}

export type PostProps = {
  id: string
  username: string
  location: string
  likes: string
  cover: ImageSourcePropType
  description: string
  lastLiked: Profile
}

interface Props {
  data: PostProps
}

export function Post({ data }: Props) {
  return (
      <View style={styles.post}>
        <PostHeader username={data.username} location={data.location} />
        <PostPhoto source={data.cover} />
        <View style={styles.postFooter}>
          <PostOptions />
          <PostAbout avatar={data.lastLiked.avatar} likes={data.likes} />
          <PostDescription value={data.description} />
        </View>
      </View>
  )
}