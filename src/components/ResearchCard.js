import { Col } from "react-bootstrap";

export const ResearchCard = ({ title, description, imgUrl, PrjUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />

        <div className="proj-txtx">
          <a
            href={PrjUrl}
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
