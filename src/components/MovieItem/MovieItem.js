import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieItem.css";
import { addFavoriteList } from "../../redux/actions";

class MovieItem extends Component {
    render() {
        const { title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;