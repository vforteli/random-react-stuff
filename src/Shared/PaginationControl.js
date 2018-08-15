import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';



class PaginationControl extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <Pagination>
                <PaginationItem>
                    <PaginationLink href="#">First</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#">Previous</PaginationLink>
                </PaginationItem>
                {[...Array(this.props.count)].map((x, i) =>
                    <PaginationItem key={i}>
                        <PaginationLink href="#">
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem>
                    <PaginationLink next href="#">Next</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">Last</PaginationLink>
                </PaginationItem>
            </Pagination>

        )
    }
}

export default PaginationControl;