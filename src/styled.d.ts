import "styled-components";
import { AppTheme } from "./types/types";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
