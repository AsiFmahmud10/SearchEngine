import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";


export interface searchHeaderProps {
    
}
 
const SearchOption: React.FC<searchHeaderProps> = () => {
    return ( 
        <>
        <div className="search__options">
            <div className="search__optionLeft">
              <div className="search__option">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>
              <div className="search__option">
                <DescriptionIcon />
                <Link to="/">news</Link>
              </div>
              <div className="search__option">
                <ImageIcon />
                <Link to="/">image</Link>
              </div>
              <div className="search__option">
                <LocalOfferIcon />
                <Link to="/">offer</Link>
              </div>
              <div className="search__option">
                <RoomIcon />
                <Link to="/">maps</Link>
              </div>
              <div className="search__option">
                <MoreVertIcon />
                <Link to="/">more</Link>
              </div>
            </div>
            <div className="search__optionRight">Settings</div>
          </div>
          
        </>
     );
}
 
export default SearchOption;