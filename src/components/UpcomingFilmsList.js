import React, {Component} from 'react'
import UpcomingFilm from './UpcomingFilm'

class UpcomingFilmsList extends Component {

  render(){

    const upcomingFilmNodes = this.props.films.map(upcomingFilm => {
      return (
        <UpcomingFilm
          name={upcomingFilm.name}
          key={upcomingFilm.id}
          >
            {upcomingFilm.url}
          </UpcomingFilm>
      )
    })
  return(
    <ul className="UpcomingFilmsList">
      {upcomingFilmNodes}
    </ul>
  )

  }
}

export default UpcomingFilmsList;
