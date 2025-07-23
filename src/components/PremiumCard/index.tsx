import { RxCross2 } from "react-icons/rx";
import {
  PremiumCardContainer,
  PremiumFlexContainer,
  PremiumLogo,
  RemoveButtonContainer,
  PremiumHeading,
  GetButton,
} from "./StyledComponents";

interface CardProps {
    removeCard: () => void;
}

const PremiumCard: React.FunctionComponent<CardProps> = ({removeCard}) => {

  return (
    <PremiumCardContainer>
      <PremiumFlexContainer>
        <PremiumLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <RemoveButtonContainer onClick={() => removeCard()}>
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
