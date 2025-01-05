import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import frenchCV from "../../Assets/CV-LA_Marco.pdf";
import englishCV from "../../Assets/Resume-EN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ minHeight: "100vh" }}>
        {/* French CV */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <h3>CV en Français</h3>
          <Button
            variant="primary"
            href={frenchCV}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: "10px" }}
          >
            <AiOutlineDownload /> Télécharger le CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document file={frenchCV} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.8} />
          </Document>
        </Row>

        {/* English CV */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "40px", marginBottom: "20px" }}>
          <h3>CV in English</h3>
          <Button
            variant="primary"
            href={englishCV}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: "10px" }}
          >
            <AiOutlineDownload /> Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document file={englishCV} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.8} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
