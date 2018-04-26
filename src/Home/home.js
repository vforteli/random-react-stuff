import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsItems: null,
            documentItems: null
        };
    }

    componentDidMount() {
        axios.get('https://api.flexinets.se/api/news/').then(response => {
            this.setState({ newsItems: response.data });
        }, function (response) {
            console.debug('Couldnt load news...');
        });

        axios.get('https://documents.flexinets.se/documents/?number=10').then(response => {
            this.setState({ documentItems: response.data });
        }, function (response) {
            console.debug('Couldnt load documents...');
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card newsbox">
                            <div className="card-body">
                                <h4>News</h4>
                                <NewsItems items={this.state.newsItems} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card newsbox">
                            <div className="card-body">
                                <h4>Latest documents</h4>
                                <DocumentItems items={this.state.documentItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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



const DocumentItems = props =>
    <div className="news">
        {props.items === null && <div className="chartloading"></div>}
        <table className="documentstable">
            <tbody>
                {props.items &&
                    props.items.map((item, index) =>
                        <tr key={index}>
                            <td>{moment(item.Created).format('MMMM Do')}</td>
                            <td><a href={'https://documents.flexinets.se/documents/download/' + item.Filename}>{item.Filename}</a></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>;



export default Home;