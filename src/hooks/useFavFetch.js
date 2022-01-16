import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import API from "../API";

const useFavFetch = () => {

    const [favourite] = useLocalStorage('favouriteNasaImages', []);
    const [state, setState] = useState({
        currentIdx: 0,
        length: favourite.length,
        response: [],
        offset: 12
    });
    const [loading, setLoading] = useState(false);
    const [loadMore, setLoadMore] = useState(false);


    const fetchImages = async (FavList) => {

        const response = await Promise.all(FavList.map(async (date) => {
            const resp = await API.fetchNasaOneDayImage(date);
            return resp;
        }));

        return response;
    }

    const fetchFavImages = async (currentIdx, offset) => {
        setLoading(true);

        const Fav = favourite.slice(
            currentIdx,
            Math.min(currentIdx + offset, favourite.length)
        );

        const response = await fetchImages(Fav);
        console.log('response', response);

        setState(prev => {
            return {
                currentIdx: currentIdx + offset,
                offset: offset,
                length: favourite.length,
                response: currentIdx === 0 ? [...response] : [...prev.response, ...response]
            }
        })

        setLoading(false);
    }

    useEffect(() => {
        const newState = {
            currentIdx: 0,
            length: favourite.length,
            response: [],
            offset: 12
        };
        setState(newState);

        fetchFavImages(newState.currentIdx, newState.offset);

    }, [setState, favourite]);

    useEffect(() => {
        if (!loadMore) {
            return;
        }
        setLoadMore(false);
        fetchFavImages(state.currentIdx, state.offset)
    }, [state, loadMore, setLoadMore]);

    return { state, loading, setLoadMore }
}

export default useFavFetch;