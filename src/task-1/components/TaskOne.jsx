import {
  StyledHeading,
  StyledMainDiv,
  StyledEmailDiv,
  StyledParagraph,
  StyledEmailButton,
  StyledOLetter,
  StyledHeadingText,
  StyledInsideDiv,
} from "../styles/StyledTaskOne";

export const TaskOne = () => {
  return (
    <StyledMainDiv>
      <StyledHeading>
        <StyledHeadingText>log</StyledHeadingText>
        <StyledOLetter>o</StyledOLetter>
        <StyledHeadingText>type</StyledHeadingText>
      </StyledHeading>
      <StyledInsideDiv>
        <StyledParagraph>
          Like what you find here? Subscribe to our monthly news letter and be
          the first to hear from us!
        </StyledParagraph>
        <StyledEmailDiv>
          <StyledParagraph>your-email@provider.com</StyledParagraph>
          <StyledEmailButton>subscribe</StyledEmailButton>
        </StyledEmailDiv>
      </StyledInsideDiv>
    </StyledMainDiv>
  );
};
