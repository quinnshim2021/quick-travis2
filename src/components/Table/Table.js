import React, { useState } from "react";
import { Tooltip } from "@material-ui/core";

const Table = ({course, students}) => {

    const [heatlhyTemp, setHealthy] = useState(96);
    const [onlyUnhealthy, setOnlyUnhealthy] = useState(false);
    const getTemp = s => { 

        let keys = Object.keys(students)

        for (var i = 0; i < keys.length; i++){
            if ( s === students[keys[i]]["netid"]) {
                let entries = Object.keys(students[keys[i]]["record"])
                if (entries.length !== 0){
                    let max = 0;
                    let dT = "";
                    for (const entry in entries){
                        if (Date.parse(entries[entry]) > max){
                            max = Date.parse(entries[entry]);
                            dT = entries[entry]
                        }
                    }
                    return [students[keys[i]]["record"][dT], dT];
                }
                else {
                    return ("-", "-");
                }
            }
        }

        
        return ("-", "-")
      }

    return(
        <div id="table-container">
            <button data-cy="change" id="update_healthy" onClick={() => heatlhyTemp === 96 ? setHealthy(90) : setHealthy(96)}>
                Change Healthy Temp
            </button>
            <button data-cy="unhealthy" onClick={() => setOnlyUnhealthy(!onlyUnhealthy)}>
                {onlyUnhealthy ? "Show All Students" : "Show Unhealthy Students"}
            </button>             
            <caption>{course["Name"]}</caption>
            <table data-cy="table" className="course-table table-bordered" data-testid={course["Name"]}>
            <thead>
                <th scope="col">Student Name</th>
                <th scope="col">Latest Temperature</th>
                <th scope="col">Date of Temperature</th>
            </thead> 
            <tbody>
                    {course["Roster"].map((s) => 
                        Number(getTemp(s)[0]) > heatlhyTemp ?
                            <tr>
                                <td class="unhealthy" data-testid="unhealthy" key={s}>{s}</td>
                                <Tooltip data-testid="tooltip" title="temperature not within healthy range" aria-label="temperature not within healthy range"><td>{getTemp(s)[0]}</td></Tooltip>
                                <td>{getTemp(s)[1]}</td> 
                            </tr>
                        
                        : onlyUnhealthy ? console.log("") :
                            <tr>
                                <td class="healthy" data-testid="healthy" key={s}>{s}</td>
                                <Tooltip data-testid="tooltip" title="temperature within healthy range" aria-label="temperature within healthy range"><td>{getTemp(s)[0]}</td></Tooltip>
                                <td>{getTemp(s)[1]}</td> 
                            </tr>
                    )}
            </tbody>
            </table>    
        </div>
    );
    
}

export default Table;