import React from 'react';

import PullRequestList from './PullRequestList'
// /d6f6dd-dac4f7-f4989c-afc2d5-acecf7

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      pull_requests: [
        {
          id: '#214',
          title: 'First PR ever',
          assignee: 'Santa Clause',
          repo: 'popcubex/dashboard',
          color: '#acecf7'
        },
        {
          id: '#396',
          title: 'Another PR',
          assignee: 'Zwarte piet',
          repo: 'popcubex/dashboard',
          color: '#f4989c'
        },
        {
          id: '#429',
          title: 'Some awesome feature request with a very long title because peeps are not descriptive',
          assignee: 'Paas Haas',
          repo: 'popcubex/rpi-image',
          color: '#d6f6dd'
        }
      ]
    }
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
