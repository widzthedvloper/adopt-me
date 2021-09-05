import { useState, useEffect } from "react";

const localCache = {};

export const useBreedList = (animal) => {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if(!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        function requestBreedList() {
             setBreedList([]);
             setStatus("Loading")
             fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
             .then(res => res.json())
             .then(data => {
                 localCache[animal] = data.breeds || [];
                 setBreedList(localCache[animal]);
                 setStatus("Loaded");
             })
         };

    },[animal])

    return [breedList, status];
};