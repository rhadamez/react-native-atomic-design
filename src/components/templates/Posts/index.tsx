import { FlatList} from 'react-native'

import { posts } from '../../../utils/posts';

import { styles } from '../../../pages/Feed/styles'
import { Post } from '../../organisms/Post';

export function Posts() {
  return (
    <FlatList
    data={posts}
    style={styles.posts}
    showsVerticalScrollIndicator={false}
    keyExtractor={post => post.id}
    renderItem={({ item }) => (
      <Post data={item} />
    )}
  />
  )
}