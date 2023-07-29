import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="./images/cta-logo-one.svg" />
        <SignUp>Get all there</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with Disney+ subscription. As of 03/26/21, the price of Dinsey+ and
          The Disney Bundle will increase by 1$.
        </Description>
        <CTALogoTwo src="./images/cta-logo-two.png"></CTALogoTwo>
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.7;
    background-image: url("./images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
  }
`;

const CTA = styled.div`
  width: 80%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  margin-top: 8px;
  margin-bottom: 12px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1.5px;
  transition: background-color 250ms;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
  object-fit: container;
`;

export default Login;
