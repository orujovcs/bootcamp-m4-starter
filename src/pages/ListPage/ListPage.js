import React, { Component } from "react";
import "./ListPage.css";
import { connect } from "react-redux";
import { getList, getMovieInfoByImdbID } from "../../redux/actions";
import Header from "../../components/Header/Header";

class ListPage extends Component {
    state = {
        isClicked: false,
    };
    componentDidMount() {
        const id = this.props.match.params;
        console.log(id);
        this.props.getList(id);
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;