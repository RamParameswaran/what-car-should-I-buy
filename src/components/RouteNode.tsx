import React, { useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";

import { RouteNodeType } from "types";

type props = {
    flowchart_data: RouteNodeType;
};

const RouteNode: React.FunctionComponent<props> = () => {
    const location = useLocation();
    const history = useHistory();

    // const [currentNode, setCurrentNode] = useState<RouteNodeType>({
    //     name: "",
    //     route: "",
    //     children: [],
    // });

    useEffect(() => {
        // const paths = location.pathname.split("/");
        // console.log(paths);
        // console.log("path changed: ", location.pathname);
    }, [location.pathname]);

    return (
        <div>
            <p
                onClick={() => {
                    // console.log(location.pathname);
                    history.push(`${location.pathname}/one`);
                }}
            >
                One
            </p>
            <p
                onClick={() => {
                    // console.log(location.pathname);
                    history.push(`${location.pathname}/two`);
                }}
            >
                Two
            </p>
            <p
                onClick={() => {
                    // console.log(location.pathname);
                    history.push(`${location.pathname}/three`);
                }}
            >
                Three
            </p>
        </div>
    );
};

export default RouteNode;
