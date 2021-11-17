import React, { useState } from "react";
import {
  Container,
  ListGroup,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import MyAlert from "./Alert";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const removetTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const closeAlert = () => {
    setShowAlert(false);
  };
  const addToTodo = () => {
    if (name) {
      setTodos([{ name, id: new Date().getTime().toString() }, ...todos]);
      setName("");
    } else {
      setShowAlert(true);
    }
  };
  return (
    <>
      <Container>
        <div
          style={{
            width: "50%",
            margin: "auto",
            height: "500px",
          }}
          className=" align-items-center justify-content-center"
        >
          {showAlert && (
            <MyAlert
              closeAlert={closeAlert}
              variant="secondary"
              message="Please add a value..."
            />
          )}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Todo..."
              aria-label="todo"
              aria-describedby="todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={addToTodo}
            >
              Add
            </Button>
          </InputGroup>
          {todos.length > 0 ? (
            <Card style={{ width: "100%" }}>
              <ListGroup variant="flush" as="ol" numbered>
                {todos.map((item) => {
                  const { id, name } = item;
                  return (
                    <ListGroup.Item key={id} as="li">
                      {name}{" "}
                      <Button
                        variant="outline-danger"
                        style={{ float: "right" }}
                        onClick={() => {
                          removetTodo(id);
                        }}
                      >
                        delete
                      </Button>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
          ) : (
            <center className="h3">Start adding Tasks...</center>
          )}
        </div>
      </Container>
    </>
  );
};

export default Todo;
