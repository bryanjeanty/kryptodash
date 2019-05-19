import React, { Component, Fragment } from "react";
import { Button } from "../client/components/bootstrap/Button";
import { Card } from "../client/components/bootstrap/Card";
import { Table } from "../client/components/bootstrap/Table";
import { ListGroup } from "../client/components/bootstrap/ListGroup";
import { Form } from "../client/components/bootstrap/Form";
import { Modal } from "../client/components/bootstrap/Modal";
import { NavBar } from "../client/components/bootstrap/NavBar";
import { BootPagination } from "../client/components/bootstrap/BootPagination";
import { Spinner } from "../client/components/bootstrap/Spinner";
import { Toast } from "../client/components/bootstrap/Toast";

class Bootstrap extends Component {
  render() {
    return (
      <Fragment>
        <div className="bootstrap">
          <div className="buttons">
            <Button color="primary" value="Primary" />
            <Button color="success" value="Success" />
            <Button color="danger" value="Danger" />
            <Button color="dark" value="Dark" />
            <Button color="link" value="Link" />
          </div>
          <div className="cards">
            <Card
              title="Joe"
              info="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
              url="https://google.com"
            />
            <Card title="RUPx Balance" info="2,245.85" lg={true} />
          </div>
          <div className="list-items">
            <ListGroup title="Coins" items={["coin-1", "coin-2", "coin-3"]} />
          </div>
          <div className="name-table">
            <Table
              list={[
                {
                  first: "mark",
                  last: "otto",
                  handle: "@mdo"
                },
                {
                  first: "jacob",
                  last: "thorton",
                  handle: "@fat"
                },
                {
                  first: "larry",
                  last: "the bird",
                  handle: "@twitter"
                }
              ]}
            />
          </div>
          <div className="my-form">
            <Form fields={["name", "email", "password"]} />
          </div>
          <div className="my-modal">
            <Button
              value="Launch demo modal"
              color="primary"
              datatoggle="modal"
              datatarget="#mymodal"
            />
            <Modal modalId="mymodal" title="My Modal">
              <Form fields={["name", "email", "password"]} />
            </Modal>
          </div>
          <div className="my-navbar">
            <NavBar
              brand={{
                name: "Google",
                url: "https://www.google.com"
              }}
              cta="Get Started"
              actions={[
                { name: "Sign Up", id: "#signup" },
                { name: "Sign In", id: "#signin" }
              ]}
            />
            <Modal modalId="signup" title="Sign Up" />
            <Modal modalId="signin" title="Sign In" />
          </div>
          <div className="my-pagination">
            <BootPagination page={1} />
          </div>
          <div className="my-spinner">
            <Spinner />
          </div>
          <div className="my-toast">
            <Toast
              show={true}
              title="Error"
              message="User account already exist!"
            />
          </div>
        </div>
        <style jsx>{`
          .bootstrap {
            height: 100%;
            width: 90%;
            margin: auto;
          }

          .bootstrap > * {
            margin: 1.25rem 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Bootstrap;
