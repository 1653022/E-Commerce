import React, {Component} from 'react'

class Search extends Component{
    render(){
        return(
            <div>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;