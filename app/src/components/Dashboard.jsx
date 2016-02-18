import React from 'react';
import io from 'socket.io-client';

import PullRequestList from './PullRequestList'

const socketURL = 'http://localhost:4444';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      pull_requests: [],
      client_id: null
    }
  }

  componentDidMount(){
    this.client = io.connect(socketURL);
    this.client.on('connected', (id) => {
      this.setState({client_id: id});
      console.log(`I have being assigned id: ${ id }`);
    });

    this.client.on('pull_requests', (pull_requests) => {
      this.setState({pull_requests});
      console.log('Pull requests received', pull_requests);
    });
  }

  render() {
    return (
        <div className='dashboard'>
            <PullRequestList items={this.state.pull_requests}/>
        </div>
    );
  }
}

export default Dashboard;
// /d6f6dd-dac4f7-f4989c-afc2d5-acecf7
