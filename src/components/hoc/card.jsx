import { Card, CardBody, CardImg, CardText, CardTitle, Row, Col } from "react-bootstrap"

import './style.scss'

const CCard = ({ image, title, text, price }) => {
    return (
        <Card>
            <CardImg src={image} />
            <CardBody>
                <Row>
                    <Col md={8}>
                        <CardTitle>{title}</CardTitle>
                        <CardText>{text} </CardText>

                    </Col>
                    <Col md={4}>
                        <CardText>&#8377; {price}</CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default CCard;