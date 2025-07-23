import 'styled-components';
import { AppTheme } from './App';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
