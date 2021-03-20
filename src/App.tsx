import React from "react";

import flowchart_data from "flowchart_data.json";
import { BrowserRouter as Router } from "react-router-dom";

import RouteNode from "components/RouteNode";

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <RouteNode flowchart_data={flowchart_data} />
        </Router>
    );
};

export default App;
