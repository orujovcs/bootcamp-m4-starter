import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";
import { removeMovieFromFavoriteList, postList } from "../../redux/actions";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    isSbm: false,
    title: "",
  };
  favoriteChangeHandler = (e) => {
    this.setState({ title: e.target.value });
    if(document.querySelector(`.${e.target.className}`).value.length > 0){
      document.querySelector(`.${e.target.parentElement.className}`).querySelector(".favorites__save").style.backgroundColor = "#496ddb";
      document.querySelector(`.${e.target.parentElement.className}`).querySelector(".favorites__save").style.cursor = "pointer";
    }
    if(document.querySelector(`.${e.target.className}`).value.length === 0){
      document.querySelector(`.${e.target.parentElement.className}`).querySelector(".favorites__save").style.backgroundColor = "gray";
      document.querySelector(`.${e.target.parentElement.className}`).querySelector(".favorites__save").style.cursor = "not-allowed";
    }
    if(document.querySelectorAll(`.${e.target.className}`)[1]){
      document.querySelector(`.main-page__favorites`).querySelector(".favorites__save").style.backgroundColor = "#496ddb";
      document.querySelector(`.main-page__favorites`).querySelector(".favorites__save").style.cursor = "pointer";
    }
    if(document.querySelectorAll(`.${e.target.className}`)[1].value.length === 0){
      document.querySelector(`.main-page__favorites`).querySelector(".favorites__save").style.backgroundColor = "gray";
      document.querySelector(`.main-page__favorites`).querySelector(".favorites__save").style.cursor = "not-allowed";
    }
  };
  getImdbIDArray = () => {
    let favoritesIDArray = this.props.favoriteList.map((item) => {
      return item.imdbID;
    });
    return favoritesIDArray;
  };
  saveListHandler = () => {
    this.setState({ isSbm: true });
    this.props.postList(this.state.title, this.getImdbIDArray());
  };
  render() {
    const { title, isSbm } = this.state;
    return (
      <div className="favorites">
        <input
          value={title}
          className="favorites__name"
          onChange={this.favoriteChangeHandler}
          onClick={this.favoriteChangeHandler}
          placeholder="Введите название списка"
          disabled={!this.props.favoriteList.length}
        />
        <ul className="favorites__list">
          {this.props.favoriteList.map((item) => {
            return (
              <li key={item.imdbID}>
                <button
                  className="remove-favorite-movie"
                  onClick={() =>
                    this.props.removeMovieFromFavoriteList(item.imdbID)
                  }
                >
                  X
                </button>
                {item.Title} ({item.Year})
              </li>
            );
          })}
        </ul>

        {!isSbm ? (
          <button
            type="button"
            className="favorites__save"
            onClick={this.saveListHandler}
            disabled={!this.state.title.length}
          >
            Сохранить список
          </button>
        ) : (
            <Link
              to={"/list/" + this.props.listID}
              target="_blank"
              className="link-to__list"
            >
              Перейти к списку
            </Link>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    favoriteList: state.favoriteList,
    favoritesIDArray: state.favoritesIDArray,
    listID: state.listID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFromFavoriteList: (id) => {
      dispatch(removeMovieFromFavoriteList(id));
    },
    postList: (title, favoritesIDArray) => {
      dispatch(postList(title, favoritesIDArray));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
