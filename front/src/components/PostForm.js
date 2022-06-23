import { Form, Button, Modal, FloatingLabel } from "react-bootstrap";
import React from "react";
import React, { useState, useEffect } from "react";
import setPost from "../apiCall/setPost";
import getAllPost from "../apiCall/getAllPost";

const PostForm = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    const response = await setPost(formData);
    console.log(response);

    setShow(false);
  };
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Publier
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Publication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              <Form.Group className="position-relative mb-3">
                <Form.Label>Titre de la Publication</Form.Label>
                <Form.Control
                  as="textarea"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Group className="position-relative mb-3">
                <Form.Label>Publication</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Group>
            </FloatingLabel>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="file"
                file={file}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Retour
          </Button>
          <Button variant="dark" onClick={handleSubmit}>
            Publier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostForm;
