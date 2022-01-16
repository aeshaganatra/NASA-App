import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageInfo from "../ImageInfo";
import ImageInfoBar from "../ImageInfoBar";
import ImagePath from "../ImagePath";
import Spinner from "../Spinner";
import Grid from "../Grid";
import Thumb from "../Thumb";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getFavMessage, toggleFav } from "../../helpers";
import { useImageFetch } from "../../hooks/useImageFetch";

const Image = () => {
    const { date } = useParams();
    const { state, loading, error } = useImageFetch(date);
    const [favourite, setFavourite] = useLocalStorage('favouriteNasaImages', []);
    const [showFavMessage, setShowFavMessage] = useState(getFavMessage(date, favourite));

    useEffect(() => {
        setShowFavMessage(getFavMessage(date, favourite));
    }, [date, favourite])


    if (loading) return <Spinner />;
    if (error) {
        return (<div>Opps something went wrong...</div>);
    }
    return (
        <>
            <ImagePath imageTitle={state.title} />
            <ImageInfo image={state} />
            <ImageInfoBar
                date={state.date}
                copyright={state.copyright}
                hdurl={state.hdurl}
                toggleFav={() => toggleFav(date, favourite, setFavourite, setShowFavMessage)}
                favMessage={showFavMessage}
            />
            <Grid header='Random Images'>
                {
                    state.random.map(
                        photo => (
                            <Thumb
                                key={photo.date}
                                url={photo.url}
                                clickable={true}
                                mediaType={photo.media_type}
                                date={photo.date}
                            />
                        )
                    )
                }
            </Grid>

        </>
    );
};

export default Image;
