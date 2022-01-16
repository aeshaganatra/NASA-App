import React from "react";
import { useHomeFetch } from "../../hooks/useHomeFetch"
import HeroImage from "../HeroImage";
import Grid from "../Grid";
import Thumb from "../Thumb";
import Spinner from "../Spinner";
import SearchBar from "../SearchBar";
import Button from "../Button";


const Home = () => {
    const { error, loading, searchText, homeState, setLoadMore, setSearchText } = useHomeFetch();
    if (error) {
        return (
            <div> Opps Something went wrong ... </div>
        );
    }
    return (
        <>
            {
                !searchText && homeState.response[0] ?
                    <HeroImage
                        image={homeState.response[0].hdurl}
                        title={homeState.response[0].title}
                        text={homeState.response[0].explanation}
                    />
                    : null
            }
            <SearchBar setSearchTerm={setSearchText} />
            <Grid
                header={ !searchText ?
                    `${homeState.currentDay} Photos Of The Day`:
                    `Results of ${searchText}`
                }
            >
                {
                    homeState.response.map(
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
                !loading && homeState.currentDay < homeState.startDate &&
                <Button
                    text="Load More"
                    callback={() => setLoadMore(true)}
                />
            }
        </>
    )
};

export default Home;
