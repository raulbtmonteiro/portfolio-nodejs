import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

export const FooterWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2em;

  color: ${(props) => props.theme.colors.grayLight};
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  display: inline-block;
  margin-left: 12px;
`;
