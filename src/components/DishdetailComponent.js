import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment'


function RenderDish({ dish }){
    if(dish != null){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function RenderComments({comments}) {
    if (comments != null) {
        return (
            <div className="container">
            {comments.map((com) => (
                
                    <p key={com.id}>
                        <p>{com.comment}</p>
                        <br></br>
                        <p>-- {com.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(com.date)))}</p>
                    </p>
                
                
            ))}
            </div>
        );
        
    } else {
        return (
            <div></div>
        )
    }

}

const Dishdetail = (props) => {
    console.log('Dishdetail component render invoked')
    const dish = props.dish;

    if(dish != null){

        return (
            <div className="row"> 
                <div className="col-1 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-2 col-md-5 m-1">
                    <ul className="list-unstyled">  
                        <h4>Comments</h4>
                        <li><RenderComments comments={dish.comments} /></li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
    
}




export default Dishdetail;