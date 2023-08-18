import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import leetcode from "../assets/img/leetcode.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import iconsgithub from "../assets/img/iconsgithub.svg"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/harshal-sonawane-97100b229/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a> 
              <a href="https://leetcode.com/HarshalSonawane/" target="_blank">
                <img src={leetcode} alt="Icon" />
              </a>
              <a href="https://github.com/HarshallSonawane" target="_blank">
                <img src={iconsgithub} alt="Icon" />
              </a>
              <a
                href="https://instagram.com/_harshal.__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
