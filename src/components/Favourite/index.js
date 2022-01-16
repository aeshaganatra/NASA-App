import React from "react";
import useFavFetch from "../../hooks/useFavFetch";
import Grid from "../Grid";
import Spinner from "../Spinner";
import Button from "../Button";
import Thumb from "../Thumb";


const Favourite = () => {
    const { state, loading, setLoadMore } = useFavFetch();
    return (
        <>
            <Grid
                header={`Your Favourite images: ${state.response.length} out of ${state.length}`}
            >
                {
                    state.response.map(
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
            {loading && <Spinner />}
            {
                !loading && state.currentIdx < state.length &&
                <Button
                    text="Load More"
                    callback={() => setLoadMore(true)}
                />
            }
        </>
    )
}

export default Favourite;