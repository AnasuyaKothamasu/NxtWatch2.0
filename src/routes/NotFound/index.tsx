import { useTheme } from "styled-components";
import { ReactElement } from "react";

import {
  NotFoundFlexContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundDescription,
  NotFoundHeading,
} from "./styledComponents";

import { AppTheme } from "../../types/types";
import Sidebar from "../../components/Sidebar";

const NotFound: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme() as AppTheme;
  return (
    <>
      <NotFoundFlexContainer>
        <Sidebar />
        <NotFoundContainer>
          <NotFoundImage src={theme.notFoundImage} />
          <NotFoundHeading>Page Not Found</NotFoundHeading>
          <NotFoundDescription>
            We're sorry, the page you requested could not be found.
          </NotFoundDescription>
        </NotFoundContainer>
      </NotFoundFlexContainer>
    </>
  );
};

export default NotFound;
