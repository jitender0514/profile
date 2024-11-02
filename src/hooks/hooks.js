import { useEffect, useState } from "react";
import { useActiveSectionContext } from "../contexts/acitve-section";
import {useInView} from "react-intersection-observer";


export function useSectionInView(sectionname, threshold = 0.8) {

    const {ref, inView} = useInView({threshold:threshold, })

    const {timeOfLastClick, setActiveSection} = useActiveSectionContext()

    useEffect(()=> {
        if(inView && Date.now() - timeOfLastClick> 10) {
            setActiveSection(sectionname)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionname])

    return {ref, inView}
}




export const useHasMounted = () => {

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted;
}

