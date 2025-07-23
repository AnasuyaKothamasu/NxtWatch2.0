import Sidebar from "../Sidebar";
import { useTheme } from "styled-components";
import {
  NotFoundFlexContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundDescp,
  NotFoundHeading,
} from "./StyledComponents";
import { AppTheme } from "../../App";

const NotFound: React.FunctionComponent = () => {
  const theme = useTheme() as AppTheme;
  return (
    <>
      <NotFoundFlexContainer className="flex-container-notfound">
        <Sidebar />
        <NotFoundContainer>
          <NotFoundImage src={theme.notFoundImage} />
          <NotFoundHeading>Page Not Found</NotFoundHeading>
          <NotFoundDescp>
            We're sorry, the page you requested could not be found.
          </NotFoundDescp>
        </NotFoundContainer>
      </NotFoundFlexContainer>
    </>
  );
};

export default NotFound;
