import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component{

    constructor(props){
        super(props)
        console.log('Menu component constructor invoked')
    }

    componentDidMount() {
        console.log('component mount invoked')
    }

    render(){

        const menu = this.props.dishes.map((dish) => {

            return (
                <div key={dish.id} className="col-1 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );

        });
        console.log('Menu component render invoked')

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;