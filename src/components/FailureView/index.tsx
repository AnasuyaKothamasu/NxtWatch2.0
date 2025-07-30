import { useTheme } from "styled-components";
import { ReactNode } from "react";

import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from "./StyledComponents";

import { AppTheme } from "../../types/types";

const FailureView: React.FunctionComponent = (): ReactNode => {
  const theme = useTheme() as AppTheme;

  return (
    <FailureViewContainer>
      <FailureImage src={theme.failureViewImg} alt="Failure view" />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. <br />
        Please Try Again.
      </FailureDescription>
      <FailureButton type="button" onClick={() => window.location.reload()}>
        Retry
      </FailureButton>
    </FailureViewContainer>
  );
};

export default FailureView;
