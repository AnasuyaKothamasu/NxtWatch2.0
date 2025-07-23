import { useTheme } from "styled-components";
import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescp,
  FailureButton,
} from "./StyledComponents";
import { AppTheme } from "../../App";

const FailureView: React.FunctionComponent = () => {
  const theme = useTheme() as AppTheme;
  return (
    <FailureViewContainer>
      <FailureImage src={theme.failureViewImg} alt="Failure view"/>
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescp>
        We are having some trouble to complete your request. <br />
        Please Try Again.
      </FailureDescp>
      <FailureButton type="button" onClick={() => window.location.reload()}>
        Retry
      </FailureButton>
    </FailureViewContainer>
  );
};

export default FailureView;
