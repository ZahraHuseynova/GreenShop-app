import { Component } from "react";
import {connect} from "react-redux";
import unsplash from "../api/unsplash";
import SearchPage from "./SearchPage";
import CartPage from "./CartPage";


class Main extends Component {

    state={images:[]};

    onSearchSubmit = async (term)=>{
        const response = await unsplash.get("/search/photos",{
            params:{query:term},
        });

        this.setState({images:response.data.results});
    }
    render(){
        return(
            <div className="ui container">
                <SearchPage onSubmit={this.onSearchSubmit}/>
                <CartPage images={this.state.images}/>

            </div>
        );
    };
};

export default Main;