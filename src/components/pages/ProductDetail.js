import { Component } from "react";
import {createRef} from "react"

class ProductDetail extends Component{
    constructor(props){
        super(props);

        this.state={ span: 0}
        this.imageRef = createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener("load",this.setSpan);
    }

    setSpan=()=>{
        const height = this.imageRef.current.clientHeight;

        const span = Math.ceil(height/10+1);
        this.setState({span});
    };

    render(){
        const {id,urls,alt_description}=this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img
                    ref={this.imageRef}
                    key={id}
                    src={urls.regular}
                    alt={alt_description}
                />
            </div>
        )
    }
}

export default ProductDetail;