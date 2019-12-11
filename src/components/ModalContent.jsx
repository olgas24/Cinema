import React from "react";
import axios from "axios";
import {Icon} from "antd";
import {URL_SPACE_SHADOW} from "../constants";
import {getSortedPlace, getRowsArray, getRandomInt} from "../utils";
import {SessionInfo} from "./SessionInfo";
import {Places} from "./Places";
import {OrderForm} from "./OrderForm";
import {Spin} from "antd";

export class ModalContent extends React.Component {
    state = {
        isLoading: true,
        space: [],
        chosenPlace: null,
        showForm: false,
        user: null
    };

    setLoadingDone = () => this.setState({isLoading: false});

    getPlacedArray = (arr) => {
        const sortedByRow = getSortedPlace(arr, "row");
        const rows = getRowsArray(sortedByRow);
        const rowsSortedByPlace = rows.map(item => {
            return getSortedPlace(item, "place");
        });
        this.setState({space: rowsSortedByPlace.map((item => {
                const random = getRandomInt(1, 6);
                return item.map(elem => {
                    if (elem.place % random === 0) {
                        return {
                            ...elem,
                            booked: true
                        }
                    }
                    return elem;
                });
            }))
        });
    };

    componentDidMount() {
        axios.get(`${URL_SPACE_SHADOW}?session=${this.props.session._id}`)
            .then(({data}) => {
                console.log("data.space", data.space);
                this.setLoadingDone();
                this.getPlacedArray(data.space)
            })
            .catch((error) => {
                this.setLoadingDone();
                console.error(error);
            })
    };

    handleChoosePlace = (data) => {
        this.setState({chosenPlace: data});

    };

    handleOpenForm = () => {
        this.setState({showForm: true});
    };

    handleClickBuy = (data) => {
        this.setState({user: data})

    };

    render() {
        const {isLoading, space, chosenPlace, showForm, user} = this.state;
        const {session, handleCloseModal} = this.props;

        return (
            <div className="modal">
                <div className="modal-content">
                    {isLoading ? <Spin tip="Loading..." style={{marginTop: '100px'}}/>
                        : <div>
                            <h2>{session.movie.title}</h2>
                            <SessionInfo room={session.room} date={session.date}/>
                            {
                                user
                                    ? <div>
                                          <h2>{user.name} спасибо за покупку!</h2>
                                          <p>
                                              Ваш билет на <b>{session.movie.title}</b> ряд {chosenPlace.row}, место: {chosenPlace.place} был отправлен на {user.email}
                                          </p>
                                      </div>
                                    : <React.Fragment>
                                        <Places space={space} handleChoosePlace={this.handleChoosePlace}/>
                                        {
                                            chosenPlace &&
                                            <div>
                                                <h2>Выбрано ряд: {chosenPlace.row}, место: {chosenPlace.place}</h2>
                                                {
                                                    showForm
                                                        ? <OrderForm handleSubmitForm={this.handleClickBuy}/>
                                                        : <div className="btn-buy" onClick={this.handleOpenForm}>Купить</div>
                                                }
                                            </div>
                                        }
                                    </React.Fragment>
                            }

                            <span className="btn-close" onClick={handleCloseModal}>
                                <Icon type="close"/>
                            </span>
                        </div>
                    }
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
