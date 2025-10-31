import { Container, Row, Col, Card, Button, Modal, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { getAllIngredients } from "../api/api-ingredients";


function Ingredients() {
    // const [ingredients, setIngredients] = useState("");
    const [show, setShow] = useState(false);
    const [ing, setIng] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const data = await getAllIngredients();
                ingredients = setIngredients(data.allIngredients);
                console.log(data.allIngredients);
            }
            catch (error) {
                console.error();
            }
        };
        fetchIngredients();
        // console.log(ing);
    }, []);
    return (
        <div>
            <Image src="/ingdry.jpg" className="mb-5" fluid style={{ width: "100%", maxHeight: "100px", objectFit: "cover" }}></Image>
            <Container fluid >
                <Row className="justify-content-center g-3 mx-auto">
                    {ingredients.map((i) => (
                        <Col xs="auto" key={i._id}>
                            <Card style={{ width: '10rem' }} onClick={() => {
                                setIng(i)
                                handleShow()
                            }}>
                                <Card.Img src={i.image} style={{ width: "100%", height: "15rem", objectFit: "cover" }} ></Card.Img>
                                <Card.Body>
                                    <Card.Title>{i.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{ing.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
            </Modal>
        </div >

    );
};

export default Ingredients;