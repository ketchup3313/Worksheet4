import React, { Component } from "react";
import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/Evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

class SEPractice extends Component {
    render() {
    return (
    <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown></Dropdown>
        <Styles>
            <Table 
            data={articles} 
            columns={tablecolumns}
            />
            </Styles>
            </div>

    );
}
}
export default SEPractice;
