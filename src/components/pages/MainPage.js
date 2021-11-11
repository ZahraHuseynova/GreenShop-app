import React,{ Component } from "react";
import {connect} from "react-redux";
import unsplash from "../api/unsplash";
import ProductDetail from "./ProductDetail"
import {fetchProducts} from "../../actions/index"


class Main extends Component {

    componentDidMount(){
        this.props.fetchProducts();
        this.onSearchSubmit("plants")
    }


    onSearchSubmit = async (term)=>{
        const response = await unsplash.get("/search/photos",{
            params:{query:term},
        });
    }

    onImageSelect=(image)=>{
        this.setState({image});
    };

    renderList(){
        return this.props.fetchProducts.map((product)=>{
            return(
                <div className="ui four column grid">
                    <div className="column">
                        <div className="ui segment">
                            <div className="item" key={product.id}>
                                {this.onSearchSubmit}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="ui container">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <ProductDetail/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Main;