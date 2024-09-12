import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import Button from 'react-bootstrap/Button'

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: "500" },
            { id: 'Job2', title: 'Tester', salary: "400" },
            { id: 'Job3', title: 'Project Manager', salary: "1000" }
        ]
    }

    addNewJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs.push(job)
        this.setState({
            //arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJobs
        })
    }
    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}
export default MyComponent