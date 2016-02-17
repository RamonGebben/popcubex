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
          id: '214',
          title: 'First PR ever',
          assignee: 'Santa Clause',
          reporoot: 'popcubex',
          repo: 'dashboard',
          color: '#acecf7',
          class : 'pull_request request_prio_one'
        },
        {
          id: '396',
          title: 'Another PR',
          assignee: 'Zwarte piet',
          reporoot: 'popcubex',
          repo: 'dashboard',
          color: '#f4989c',
          class : 'pull_request request_prio_two'
        },
        {
          id: '429',
          title: 'Some awesome feature request with a very long title because peeps are not descriptive are not descriptive',
          assignee: 'Paas Haas',
          reporoot: 'popcubex',
          repo: 'rpi-image',
          color: '#d6f6dd',
          class : 'pull_request request_prio_three'
        }
      ]
    }
  }

  render() {
    return (
        <section>
          <video autoPlay loop  id="bgvid">
            <source src="/app/images/35mm.webm" type="video/webm"></source>
            <source src="/app/images/35mm.mp4" type="video/mp4"></source>
          </video>
          <header className="header">
            <h1 className="header-name">ItemBoard</h1>
          </header>
          <main className='dashboard'>
            <PullRequestList items={this.state.pull_requests}/>
          </main>
        </section>
    );
  }
}

export default Dashboard;
