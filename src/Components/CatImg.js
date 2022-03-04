import { listImgs } from "../Helpers/functions"
import { useDoFetch } from "../Hooks/useDoFetch";

export const CatImg = ({url}) => {

    // console.log(url)
    const imgs =  useDoFetch(url);
    console.log(imgs);
    return(
            <div className="card-grid">
                {
                    listImgs(imgs)  
                }
            </div>
    )
}
export default CatImg