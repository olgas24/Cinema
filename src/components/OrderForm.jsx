import React, {useState} from "react";
import {Input} from "antd";

export const OrderForm = ({handleSubmitForm}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleClickBuy = (e) => {
        e.preventDefault();
        handleSubmitForm({name, email});
    };

    return (
        <form>
            <div>
                <label htmlFor="name">Имя: </label>
                <Input
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                />
            </div>
            <div>
                <label htmlFor="name">Email: </label>
                <Input
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </div>
            <button
                className="btn-confirm"
                disabled={!name && !email}
                onClick={handleClickBuy}>
                Подтвердить
            </button>
        </form>
    )
};