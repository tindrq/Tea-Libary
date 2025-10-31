import { Button, Container, Form } from 'react-bootstrap';
// import { addIngredient } from '../api/api-ingredients'
import { useState } from "react";

function Recepie() {
    const [recepieName, setRecepieName] = useState("");
    const [recepieDescription, setRecepieDescription] = useState("");
    const [recepiePicture, setRecepiePicture] = useState();

    async function handleSubmit(e) {
        //TODO: configure multer?
    }
    return (
        <Container className='px-5 mt-3'>
            <h2>Add Recepie</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name recepie</Form.Label>
                    <Form.Control placeholder="Enter name" required value={recepieName} onChange={(event) => setRecepieName(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="..." required value={recepieDescription} onChange={(event) => setRecepieDescription(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Pick an image</Form.Label>
                    <Form.Control type="file" accept='.jpg, .jpeg, .png' onChange={(event) => setRecepiePicture(event.target.files[0])} />
                </Form.Group>
                <Button variant="light" type="submit">
                    Add
                </Button>
            </Form>
        </Container>
    );
}

export default Recepie;