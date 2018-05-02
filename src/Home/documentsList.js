import React, { Component, Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';

class DocumentsList extends Component {
    constructor(props) {
        super(props);

        this.state = { documentItems: null };
    }

    async componentDidMount() {
        const response = await axios.get('https://documents.flexinets.se/documents/?number=10');
        this.setState({ documentItems: response.data });
    }


    render() {
        return (
            <Fragment>
                <h4>Latest documents</h4>
                <DocumentItems items={this.state.documentItems} />
            </Fragment>
        );
    }
}


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



export default DocumentsList;