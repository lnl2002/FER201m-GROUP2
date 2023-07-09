import AdminLeftBar from "../components/AdminLeftBar";
import AdminHeader from "../components/AdminHeader";
import '../styles/adminLayout.css'
import { Container, Row, Col } from "react-bootstrap";

export default function AdminLayout({ className, children }) {
    return (
        <Container fluid style={{ backgroundColor: "#f6f6f6", height: "100vh" }}>
            <Row >
                <Col md={2} style={{padding: "0", position: "fixed"}}>
                    <AdminLeftBar />
                </Col>
                <Col  style={{padding: "0"}} className={"top"}>
                    <AdminHeader />
                    <div className={className} style= {{position: "relative"}}>
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}