
import React from "react";
import "./detail.css";

class Detail extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    const { location, history } = this.props;
    // console.log(location.state);
    if(location.state === undefined) {
      history.push("/");
    }    
  }
  
  render() {
    const { location } = this.props;
    // console.log(location);
    if(location.state){
      return (
        <div className="detail">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <div className="detail_data">
            <h3 className="detail_title">{location.state.title}</h3>
            <h5 className="detail_year">{location.state.year}</h5>
            <ul className="detail_genres">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="genres">#{genre}</li>
              ))}
            </ul>
            <p className="detail_summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;