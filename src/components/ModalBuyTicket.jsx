import React from "react";
import ReactDom from "react-dom";
import {ModalContent} from "./ModalContent";

export class BuyTicket extends React.Component{
    root = document.createElement("div");
    body = document.querySelector( "body");

    componentDidMount() {
      this.body.appendChild(this.root);
    };

    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render() {
        const {handleCloseModal, session} = this.props;
        return ReactDom.createPortal(<ModalContent session={session} handleCloseModal={handleCloseModal}/>, this.root)
    }
};