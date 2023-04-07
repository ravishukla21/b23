import {useState} from "react";

const useTimeout = (delay) => {
    const [ready, setReady] = useState({ready:false});
    

    setTimeout(() => {
        setReady({ready:true})
    }, delay)
    return ready;

};

export default useTimeout;
