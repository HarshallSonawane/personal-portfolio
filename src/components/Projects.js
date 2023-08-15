import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Percept.jpg";
import projImg2 from "../assets/img/7.jpg";
import projImg3 from "../assets/img/2.jpg";
import projImg4 from "../assets/img/3.png";
import projImg5 from "../assets/img/5.jpg";
import projImg6 from "../assets/img/6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Parallel Programming",
      description: "Satelite Image Change Detection Using GPGPU",
      imgUrl: projImg2,
      PrjUrl: "https://github.com/HarshallSonawane/Change-Detection-HPP",
    },
    {
      title: "Artificial Intelligence",
      description: "Perceptors: Smart Glasses for Blind",
      imgUrl: projImg1,
      PrjUrl:
        "https://github.com/HarshallSonawane/Perceptors-Smart-glasses-for-Blind",
    },
    {
      title: "Internet Of Things",
      description: "An Ad Blocking Middleware to block ads at DNS Level",
      imgUrl: projImg3,
      PrjUrl:
        "https://www.linkedin.com/posts/-harshal-sonawane_innovate-iottechnology-project-activity-6951061188151492608-qy1n?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "IaaC",
      description: "Design AWS infrastructure using Terraform",
      imgUrl: projImg4,
      PrjUrl: "#",
    },
    {
      title: "ChatBot",
      description: "ThinkBot : Your virtual Assistant",
      imgUrl: projImg5,
      PrjUrl:
        "https://github.com/HarshallSonawane/ThinkBot-Your-Virtual-Assistant",
    },
    {
      title: "Rent Management System",
      description: "A Java Application to manage Tenant Rent",
      imgUrl: projImg6,
      PrjUrl:
        "https://github.com/HarshallSonawane/TenantRentManagment-A-Rent-Management-System",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Turning Ideas into Innovation, One Project at a Time.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Each project is a chapter in my journey, where
                          creativity meets technology to shape solutions that
                          transcend challenges. With every line of code, I'm
                          crafting a narrative of innovation, resilience, and
                          progress. Join me as I continue to build the bridge
                          between ideas and reality, one project at a time.
                        </p>
                        {/* <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Each project is a chapter in my journey, where
                          creativity meets technology to shape solutions that
                          transcend challenges. With every line of code, I'm
                          crafting a narrative of innovation, resilience, and
                          progress. Join me as I continue to build the bridge
                          between ideas and reality, one project at a time.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
