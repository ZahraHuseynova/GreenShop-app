import { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";

class SearchPage extends Component{
    state = {term:""}

    handleFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render(){
        
        return(
            <div className="container">
                <Header/>
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.handleFormSubmit}>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={(e)=>this.setState({
                                term:e.target.value,
                            })}
                        />
                    </form>

                </div>
                <Footer/>
            </div>

        )
        
    }

} 

export default SearchPage;
