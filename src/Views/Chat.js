import { NavLink } from 'react-router-dom';
import React from 'react';
import '../assets/css/all.css';

class Chat extends React.Component {
    state = {
      post: {
        name: "",
        description: ""
      },
      jobs: []
    };
  
    handleChange = e => {
      const { name, value } = e.target;
      this.setState(prevState => ({
        post: { ...prevState.post, [name]: value }
      }));
    };
  
    handleSubmit = e => {
      e.preventDefault();
  
      this.setState(prevState => ({
        jobs: [...prevState.jobs, prevState.post],
        post: { name: "", description: "" }
      }));
    };
  
 render() {
    return (
        <div >
{/* NAVIGATION */}
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" exec to="/">Sākums &gt;</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link disabled" to="#">Sarakste</NavLink>
                </li>
            </ul>
{/* CHAT */}
            <h4 className="chatH">Sarakste</h4>
            <div className="conteiner chatConteiner" >
                <div className="row">
                    <div className="col-12 box chatBox">
            {/* box */}
                        <p className="messageBox">
                            {this.state.jobs.map((job, index) => (
                                <div key={index}>
                                    <strong>{job.name}:</strong> 
                                    <br/>
                                    {job.description}
                                </div>
                            ))} 
                        </p>
                    </div>
                    <div className="col-12 chatDivCol">
                        <div className="row">
                            <div className="col-12 chatCol">
            {/* Username */}
                            <div><label className="chatCol" htmlFor="username"><strong>Lietotājvārds:</strong></label></div>
                                <div className="chatCol">
                                    <input 
                                        name="name"
                                        onChange={this.handleChange}
                                        type="text"
                                        value={this.state.post.name}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col chatColCol" >
            {/* Message  */}
                                        <div className="chatCol"><label htmlFor="message"><strong>Ziņa:</strong></label></div>
                                        <div className="chatCol">
                                            <textarea 
                                                name="description"
                                                onChange={this.handleChange}
                                                type="text"
                                                value={this.state.post.description}
                                                id="message" cols="126" rows="5" 
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="col chatButton">
            {/* Button  */}
                                        <div>
                                            <button id="submitMessage" onClick={this.handleSubmit} class="btn btn-info" >Iesniegt</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default Chat;