import { useState, useEffect } from 'react';
import API from "../API";
import { correctDate, isValidDate, getDayDiff, getOffsetDate } from "../helpers";

const initHomeState = {
    currentDay: 0,
    startDate: 1000,
    response: [],
    offset: 12
}

export const useHomeFetch = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [searchText, setSearchText] = useState('');

    const [homeState, setHomeState] = useState(initHomeState);

    const setSearchTermDate = (inputSearchText) => {
        if (!inputSearchText) {
            return initHomeState;
        }
        const dates = inputSearchText.split(" ");
        if (dates.length > 3) {
            return initHomeState;
        }
        if (dates.length === 1) {
            const dateString = correctDate(dates[0])
            return isValidDate(dateString) ?
                {
                    currentDay: 0,
                    startDate: getDayDiff(dateString),
                    response: [],
                    offset: 12
                }
                : initHomeState;
        }
        if (dates.length === 3) {
            const startDate = correctDate(dates[0])
            const endDate = correctDate(dates[2])
            const data = isValidDate(startDate) && isValidDate(endDate) ?
                {
                    currentDay: getDayDiff(endDate) - 1,
                    startDate: getDayDiff(startDate),
                    response: [],
                    offset: 12
                }
                : initHomeState;
            return data;
        }
    }

    const fetchHomePageImages = async (currentDay, startDate, offset) => {
        try {
            setLoading(true);
            setError(false);
            const queryStartDate = getOffsetDate(Math.min(
                currentDay + offset - 1,
                startDate - 1
            ))
            const timeline = await API.fetchNasaTimelineImage({
                startDate: queryStartDate,
                endDate: getOffsetDate(currentDay),
            });
            timeline.reverse();
            setHomeState(prev => {
                return {
                    startDate: prev.startDate,
                    offset: prev.offset,
                    currentDay: prev.currentDay + prev.offset,
                    response:
                        prev.currentDay !== 0 ? [...prev.response, ...timeline] : [...timeline]
                }
            });
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        const newHomeState = setSearchTermDate(searchText);
        setHomeState(newHomeState);
        fetchHomePageImages(newHomeState.currentDay, newHomeState.startDate, newHomeState.offset);
    }, [searchText]);

    useEffect(() => {
        if (!loadMore) {
            return;
        }
        setLoadMore(false);
        fetchHomePageImages(homeState.currentDay, homeState.startDate, homeState.offset);
    }, [loadMore, homeState, setLoadMore]);

    return { error, loading, searchText, homeState, setLoadMore, setSearchText };
}