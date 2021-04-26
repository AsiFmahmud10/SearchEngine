
import Input from "./Input";
import "./Search.css";
import SearchOption from "./SearchOption";
import { useStateContext } from "./StateProvider";
import { useGoogle } from "./useGoogle";

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [{ term }, dispatch] = useStateContext() as any;

  if(term != null){
    localStorage.setItem("term",term)
  }
  const query = term ? term : localStorage.getItem("term")
  const {data} = useGoogle(query)
 console.log("-----`")
  return (
    <>
          
      <div className="searchPage">
        <div className="upper_part">
          <header>
            <img
              src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            />
            <div className="searchPage__body">
              <Input hideButtons />
            </div>
          </header>
            <SearchOption/>
            </div>
          {console.log(term,data,"asdasdasd")}
         {data && query && ( <div className="searchPage__results">
                    <p className="result__count">
                      about {data.searchInformation.formattedTotalResults} results{" "}
                      {data?.searchInformation.formattedSearchTime} for {query}
                    </p>
                      <div>
                             
                                {data?.items.map((item : any) => (
                                  <div className="results_item" key={item.title}>
                                    <a href={item.link}>{item.displayLink}</a>
                                    <a href={item.link}>
                                      <h2>{item.title}</h2>
                                    </a>
                                    <div className="snippet">{item.snippet}</div>
                                  </div>
                                ))}
                      </div>
          </div>)}
                          {/*  */}
        
      </div>
    </>
  );
};

export default Search;
