import React,{ Component } from "react";
import {connect} from "react-redux";
import unsplash from "../api/unsplash";
import SearchPage from "./SearchPage";
import ProductDetail from "./ProductDetail"


class Main extends Component {

    state={images:[],
            image:null    
    };

    componentDidMount(){
        this.onTermSubmit("plants")
    };

    onSearchSubmit = async (term)=>{
        const response = await unsplash.get("/search/photos",{
            params:{query:term},
        });

        this.setState({
            images:response.data.results,
            image:response.data.results[0],
            
        });
    }

    onImageSelect=(image)=>{
        this.setState({image});
    };

    render(){
        return(
            <div className="ui container">
                <SearchPage onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <ProductDetail 
                        images={this.state.images} 
                        image={this.state.image} 
                        onImageSelect={this.onImageSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Main;