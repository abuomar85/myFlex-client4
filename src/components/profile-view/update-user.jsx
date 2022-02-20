import React from "react"
import { Form } from "react-bootstrap"

function UpdateUser (handleSubmit, handleUpdate) {
  
    return (
        <>
            <h4>Update</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={user.Username}
                        onChange={e=> handleUpdate(e)}
                        required
                        placeholder="Enter user name"
                    />

                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        defaultValue=''
                        onChange={e=> handleUpdate(e)}
                        required
                        minLength='6'
                        placeholder="enter password at least 6 chars"
                    />

                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={user.Email}
                        onChange={e=> handleUpdate(e)}
                        required
                        placeholder="enter your email address"
                    />

                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
        </>
    )
}

export default UpdateUser