import { View } from 'react-native'

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  SaveIcon,
} from '../../../global/styles/icons';

import { styles } from './styles'
import { ButtonIcon } from '../../atoms/ButtonIcon';

export function PostOptions() {
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSide}>
        <ButtonIcon icon={FavoriteIcon}/>
        <ButtonIcon icon={CommentIcon}/>
        <ButtonIcon icon={MessengerIcon}/>
      </View>
      <SaveIcon />
    </View>
  )
}