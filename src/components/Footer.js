import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "Orange",
          textAlign: "center",
          marginTop: "-50px",
          //padding: "11",
          //width: "auto",
        }}
      >
        QuilkSCS
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p
        style={{
          color: "white",
          fontFamily: "'Open Sans',sans-serif;",
        }}
      >
        The information contained herein is of a general nature and is not
        intended to address the circumstances of any particular individual or
        entity. Although we endeavor to provide accurate and timely information,
        there can be no guarantee that such information is accurate as of the
        date it is received or that it will continue to be accurate in the
        future. No one should act upon such information without appropriate
        professional advice after a thorough examination of the particular
        situation. KPMG does not provide legal advice. © 2022 KPMG LLP, a
        Delaware limited liability partnership and a member firm of the KPMG
        global organization of independent member firms affiliated with KPMG
        International Limited, a private English company limited by guarantee.
        All rights reserved. For more detail about the structure of the KPMG
        global organization please visit https://home.QuilkSCS/governance.
      </p>
    </Box>
  );
};
export default Footer;
