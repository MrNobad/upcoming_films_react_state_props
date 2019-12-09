import React, {Component} from 'react'

class UpcomingFilm extends Component {

  render(){
    return (
      <li className="UpcomingFilm">
        <a href={this.props.children}>{this.props.name}</a>
      </li>
    )
  }

}

export default UpcomingFilm;
