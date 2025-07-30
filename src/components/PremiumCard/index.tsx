import { RxCross2 } from "react-icons/rx";
import { ReactNode } from "react";

import {
  PremiumCardContainer,
  PremiumFlexContainer,
  PremiumLogo,
  RemoveButtonContainer,
  PremiumHeading,
  GetButton,
} from "./StyledComponents";

import homeStore from "../../pages/Home/stores/homeStore";

const PremiumCard: React.FunctionComponent = ():ReactNode => {
  return (
    <PremiumCardContainer>
      <PremiumFlexContainer>
        <PremiumLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <RemoveButtonContainer onClick={() => homeStore.removeCard()}>
          <RxCross2 className="cross-mark" />
        </RemoveButtonContainer>
      </PremiumFlexContainer>
      <PremiumHeading>
        Buy Nxt Watch Premium prepaid plans with UPI
      </PremiumHeading>
      <GetButton>GET IT NOW</GetButton>
    </PremiumCardContainer>
  );
};

export default PremiumCard;
