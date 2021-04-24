
import { useStateContext } from "./StateProvider";


export interface SearchProps {
    
}
 
const Search: React.FC<SearchProps> = () => {
    const [state,dispatch] = useStateContext() as any
    return (  <>
            <div>
                            {JSON.stringify(state.term)}
            </div>
    
    </>);
}
 
export default Search;