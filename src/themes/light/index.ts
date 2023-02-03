import {ms} from 'react-native-size-matters';
import {sfs} from '../../utils/responsibleText';

export default {
  Sizes: {
    FONTSIZE_BUTTON: sfs(8),
    FONTSIZE_BUTTON_SEND: sfs(12),
    FONTSIZE_BUTTON_TITLE: sfs(20),
    ICON_SIZE_BUTTON: sfs(15),
    FONTSIZE_TITLE: sfs(22),
    FONTSIZE_LABEL: sfs(12),
    FONTSIZE_INPUT_LABEL: sfs(13),
    FONTSIZE_INPUT: sfs(16),
    ICON_SIZE_SMALL: ms(16),
    ICON_SIZE: ms(22),
    ICON_SIZE_LG: ms(56),
  },

  Colors: {
    BLACK: '#000',
    WHITE: '#FFF',
    PLACEHOLDER: 'rgba(60, 60, 67, 0.6)',
    gray_dark: '#1c1c1c',
    DARK: '#48484A',
    GRAY_LIGHT: 'rgba(96,96,96,0.8)',
    SECONDARY_LIGHT_GRAY: 'rgba(118, 118, 128, 0.12)',
    ERROR: '#C12126',
    FEEDBACK_CORRECT: '#6ea204',
    FEEDBACK_WARNING: '#F2AF00',
    TEXT_COLOR: '#000000',
    BACKGROUND: '#fafafa',
    COLOR_APPLICATION: '#006600',
    BUTTON_TEXT: '#FFF',
    ICON_COLOR: 'rgba(60, 60, 67, 0.6)',
    ACCESSIBILITY: '#FFF',
    CLICKABLE_TEXT: '#C12126',
    INPUT: '#000',
    CARD_COLOR: '#FFF',
    CARD_BORDER_COLOR: '#000',
  },
};
