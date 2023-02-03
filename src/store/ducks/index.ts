import {combineReducers} from 'redux';

import font from './font';
import theme from './theme';
import repos from './repositories';

export default combineReducers({font, theme, repos});
