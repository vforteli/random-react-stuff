import React, { Component, Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';

class NewsList extends Component {
    constructor(props) {
        super(props);

        this.state = { newsItems: null };
    }

    async componentDidMount() {
        const response = await axios.get('https://api.flexinets.se/api/news/');
        this.setState({ newsItems: response.data });
    }


    render() {
        return (
            <Fragment>
                <h4>News</h4>
                <NewsItems items={this.state.newsItems} />
            </Fragment>
        );
    }
}

const NewsItems = props =>
    <div className="news">
        {props.items === null && <div className="chartloading"></div>}
        {props.items &&
            props.items.map((item, index) =>
                <article key={index}>
                    <span className="newsdate">{moment(item.CreatedOn).format('MMMM Do')}</span>
                    <header>{item.Title}</header>
                    <p>{item.Text}</p>
                    <a href={item.Url}>Read more</a>
                </article>
            )
        }
    </div>;



export default NewsList;