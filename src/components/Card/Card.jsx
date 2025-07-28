import './Card.css'
import { FaHeart, FaPlayCircle, FaRegThumbsDown } from "react-icons/fa";
import { FaPlus,FaAngleDown} from "react-icons/fa";
import { FaRegThumbsUp, FaStar } from "react-icons/fa6";


import { addToWishlist } from "../../API/Movies";
// import Text from '../Text/Text';
const baseUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie, style, favMovies }) => {
  const isEqual = favMovies?.includes(movie?.id);
  console.log(isEqual);
  return (
    <div className={`single-card  ${style || ""} `}>
      <div className="card-img">
        <img
          src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
          alt="single movie card"
          className="test"
        />
        <div className="card-content">
          <div className="icons">
            <div className="left-icons">
              <FaPlayCircle className="play-icon"  size={'28px'} />
              <FaPlus 
              size={'15px'}
              color='black'
              onClick={() => addToWishlist(movie.id)}
                fill={isEqual ? "red" : "white"}
                className="plus-icon"/><span className='addto_my'>Add To My list</span>
              <FaRegThumbsUp size={'15px'} className="thumbsup_icon"/><span className='like_this'>Like This</span>
              <div className="thumbs_collection">
              <FaRegThumbsDown className='thumbs_down'size={"17px"}/> 
              <FaRegThumbsUp className='thumbs_down_center'size={"15px"}/>
              <FaHeart className='heart_icon' size={"17px"}/>
              </div>
              <FaAngleDown size={"15px"} className='down_arrow'/><span className='more_info'>More Info</span>
            </div> 
          </div>
          <div className="rating">
              <div className="rating-value">
                <FaStar className="star-icon" fontSize={"13px"} color='gold'/>
                <span className='rating_num'>{movie.vote_average.toFixed(1)} /10</span>
              </div>
            </div>
          <h3 className="movie-title">{movie.title || movie.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;