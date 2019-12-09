import React from "react";
import axios from "axios";
import {URL_SPACE_SHADOW} from "../constants";

export class ModalContent extends React.Component {
    state = {
        isLoading: true
    };

    setLoadingDone = () => this.setState({isLoading: false});

    getPlacedArray = (arr) => {
      const sortedByRow = arr.sort((a,b) =>{
          if (a.row > b.row){
              return 1;
          }
          if (a.row < b.row){
              return -1;
          }
          return 0;
      })
    };

    componentDidMount(){
                axios.get(`${URL_SPACE_SHADOW}?session=${this.props.sessionId}`)
                    .then(({data}) => {
                        console.log("data.space", data.space);
                        this.setLoadingDone();
                    })
                    .catch((error) => {
                        this.setLoadingDone();
                        console.error(error);
                    })
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h2>jnjdn</h2>
                </div>
            </div>
        )
    }
};

// import { Modal, Button } from 'antd';
//
// export class ModalContent extends React.Component {
//     state = { visible: false };
//
//
//     handleOk = e => {
//         console.log(e);
//         this.setState({
//             visible: false,
//         });
//     };
//
//     handleCancel = e => {
//         console.log(e);
//         this.setState({
//             visible: false,
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 {/*<Button type="primary" onClick={this.showModal}>*/}
//                 {/*    Купить билет*/}
//                 {/*</Button>*/}
//                 <Modal
//                     showModal = {this.props.showModal}
//                     title="Basic Modal"
//                     visible={this.state.visible}
//                     onOk={this.handleOk}
//                     onCancel={this.handleCancel}
//                 >
//                     <p>Some contents...</p>
//                     <p>Some contents...</p>
//                     <p>Some contents...</p>
//                 </Modal>
//             </div>
//         );
//     }
// }
