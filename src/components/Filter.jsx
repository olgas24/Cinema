import React, {useState} from 'react';

import {Icon, Input, Select} from "antd";

const {Option} = Select;

export const Filter = ({movies, setFilteredMovies, genres}) => {

    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilteredMovies = (valueInput, valueSelect) => {
        return movies.reduce((acc, item) => {
            if (
                valueInput &&
                valueSelect &&
                item.genre && item.genre.length &&
                item.genre.some(elem => elem.trim() === valueSelect) &&
                item.title.toLowerCase().includes(valueInput.toLowerCase())
            ) {
                acc.push(item);
            } else if (
                valueInput &&
                !valueSelect &&
                item.title.toLowerCase().includes(valueInput.toLowerCase())
            ) {
                acc.push(item);
            } else if (
                !valueInput &&
                valueSelect &&
                item.genre && item.genre.length &&
                item.genre.some(elem => elem.trim() === valueSelect)) {
                acc.push(item);
            }

            return acc;
        }, []);
    };

    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
        setFilteredMovies(getFilteredMovies(value, valueSelect));
    };

    const handleChangeSelect = (value) => {
        setValueSelect(value);
        setFilteredMovies(getFilteredMovies(valueInput, value));
    };

    // console.log(filteredMovies);
    // console.log(genres);
    // console.log(valueSelect);
    // console.log(setValueSelect);

    return (
        <div className="movie-filter">
            <Icon type="search"/>
            <Input type="text" name="filter-name" onChange={handleChangeInput} value={valueInput}/>
            <Select placeholder="Жанр" onChange={handleChangeSelect} allowClear>
                {genres.map((item, i) =>
                    <Option key={i} value={item}>{item}</Option>
                )}
            </Select>
        </div>
    )
};
