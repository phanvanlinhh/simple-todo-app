import React from "react";
import "./Demo.scss"
import Button from 'react-bootstrap/Button'

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        //let check = showJobs === false ? 'showJobs = true' : 'showJobs = false'
        return (
            <>
                {showJobs === false ?
                    <div>
                        <Button variant="warning" size="sm" className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </Button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <Button variant="danger" size="sm" onClick={() => this.handleOnClickDelete(item)}>Delete</Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <Button variant="warning" size="sm" onClick={() => this.handleShowHide()}>Hide</Button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent