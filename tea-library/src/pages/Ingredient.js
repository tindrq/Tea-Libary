import { Button, Container, Form } from 'react-bootstrap';
import { addIngredient } from '../api/api-ingredients'
import { useState } from "react";

function Ingredient() {
    const [herbName, setHerbName] = useState("");
    const [herbDescription, setHerbDescription] = useState("");
    const [herbPicture, setHerbPicture] = useState();

    async function handleSubmit(e) {
        //TODO: configure multer?
        await addIngredient(herbName, herbDescription, herbPicture);
    }
    return (
        <div>
            <Container className='px-5 mt-3'>
                <h2>Add Ingredient</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name Herb</Form.Label>
                        <Form.Control placeholder="Enter name" required value={herbName} onChange={(event) => setHerbName(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="..." required value={herbDescription} onChange={(event) => setHerbDescription(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Pick an image</Form.Label>
                        <Form.Control type="file" accept='.jpg, .jpeg, .png' onChange={(event) => setHerbPicture(event.target.files[0].name)} />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Add
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Ingredient;