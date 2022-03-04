    import GifGridItem from "../Components/GifGridItem";
    
    export const setURL = ( { cats }, search, insertedValue ) => {

        const prefix = 'https://'
        const api_key = 'Hiws3scQIx0qHLUEU70hSGNNvIx0Skmi';
        const end_point = 'api.giphy.com/v1/gifs/search';
        const limit = 5;
        let url = prefix + end_point + '?api_key='+ api_key + '&q=' + search + '&limit='+ limit.toString();
        if (typeof insertedValue != 'undefined' && insertedValue != "" ){

            search = encodeURI( insertedValue );
        }else{

            search = cats[ 0 ];
        }
        url = prefix + end_point + '?api_key='+ api_key + '&q=' + search + '&limit='+ limit.toString();
        return url;
    }

    export const getGifs = ({data, handleSetImgs}) => {

        const gifs = data.map( 
        img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url 
            } // Información a utilizar
        }
        )
        return gifs  
    }


    export const listInfoImgs = (imgs) => {
        const lst = imgs?.map( img => {
            return <li key = { img.id }> { img.id }:  { img.title }</li>
            // lo mismo que (desestructurado):
            // ({ id, title}) => {
                // return <li key = { id }> { title } </li>
            // }

        })
        return lst
    }

    export const listImgs = (imgs) => {


        const lstImgs = imgs?.map( img => ( // return implicito () en lugar de {}
            <GifGridItem key={ img.id } {... img }/> // Se envia cada propiedad de img como propiedad independiente.
        ))

        return (
            <>
                { lstImgs }
            </>
        )
        }