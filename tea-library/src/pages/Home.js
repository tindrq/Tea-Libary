import "bootstrap/dist/css/bootstrap.css";
import { Card, Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useState } from "react";

function Home() {
    const [recepies, setRecepies] = useState(data.recepies);

    const [searchString, setSearchString] = useState("");
    const [properties, setproperties] = useState("");
    const [exclutions, setExclutions] = useState([]);
    const [ingredient, setIngredient] = useState();

    const [showRecepieModal, setShowRecepieModal] = useState(false);
    const [selectedRecepie, setSelectedRecepie] = useState(data.recepies[0]); //todo: change to empty object

    const handleClose = () => setShowRecepieModal(false);
    const handleShow = () => setShowRecepieModal(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        let results = data.recepies;
        if (exclutions) {
            results = data.recepies.filter((recepie) => {
                return !recepie.warnings.includes(exclutions)
            })
        }
        if (properties) {
            results = results.filter((recepie) => {
                return recepie.properties.includes(properties)
            })
        }
        if (ingredient) { //Todo: make tuple of ingredient and ammount to fix sort
            results = results.filter((recepie) => {
                return recepie.ingredients.includes(ingredient)
            })
        }
        if (searchString) {
            results = results.filter((recepie) => {
                console.log(recepie.name.toLowerCase().searchString(searchString.toLocaleLowerCase()))
                return recepie.name.toLowerCase().searchString(searchString.toLocaleLowerCase()) >= 0
            })
        }
        setRecepies(results);

    };

    return (
        <div className="responsive-padding">
            <Card className="mb-5 " style={{ maxHeight: "30rem", overflow: 'hidden' }} >
                <Card.Img src="./Header.jpg"></Card.Img>
                <Card.ImgOverlay style={{ marginTop: "3rem", maxWidth: "50rem" }} className="text-center mx-auto">
                    <Card.Title className="text-white fw-bold display-2" >Search for recepies</Card.Title>
                    <Form className="mt-5 px-5 text-center" onSubmit={handleSubmit}>
                        <Form.Group className="mb-5 text-center" controlId="formBasicPassword">
                            <Form.Control className="text-center" value={searchString} type="text" onChange={(event) => setSearchString
                                (event.target.value)} placeholder="Seach ingredient or recepie names" />
                        </Form.Group>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Select className="mb-5 text-center" value={properties} onChange={(event) => setproperties(event.target.value)}>
                                        <option value={""}>Properties</option>
                                        <option value={"Anti anxiety"}>Anti anxiety</option>
                                        <option value={"Energizeing"}>Energizeing</option>
                                        <option value={"Sleep aid"}>Sleep aid</option>
                                        <option value={"Cold/flu"}>Cold/flu</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select className="mb-5 text-center" value={ingredient} onChange={(event) => setIngredient(event.target.value)}>
                                        <option value={""}> Ingredient </option>
                                        {herbs.herbs.map((herb, index) => (
                                            <option value={index} key={index}>{herb.herb}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select value={exclutions} className="mb-5 text-center" onChange={(event) => setExclutions(event.target.value)}>
                                        <option value={""}>exclutions</option>
                                        <option value={"Heart Problems"}>Heart Problems</option>
                                        <option value={"Pregnancy"}>Pregnancy</option>
                                        <option value={"New Mother"}>New Mother</option>
                                        <option value={"Thyriod condition"}>Thyriod condition</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                        </Container>
                        <Button variant="light" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </Card.ImgOverlay>
            </Card>

            <Container fluid >
                <Row>
                    {recepies.map((i, index) => {
                        return (
                            <Col key={i.name}>
                                <Card style={{ width: '15rem' }} onClick={() => {
                                    handleShow()
                                    setSelectedRecepie(i)
                                }
                                } >
                                    <Card.Img src={i.image}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{i.name}</Card.Title>
                                        <Card.Text>{i.properties}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                    )}
                </Row>
            </Container>
            <Modal show={showRecepieModal} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRecepie.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ whiteSpace: 'pre-line' }}>
                    <Card>
                        <Card.Img src={selectedRecepie.image}></Card.Img>
                    </Card>
                    {selectedRecepie.recepie.join("\n")}
                </Modal.Body>
                <Modal.Footer>
                    {selectedRecepie.properties.join("  ❃  ")}
                    <br />
                    {selectedRecepie.warnings.join("  ❃  ")}
                </Modal.Footer>
            </Modal>
        </div >
    );
}

var data = require('../temp-data/recepies.json');
const herbs = require('../temp-data/herbs.json');
export default Home;