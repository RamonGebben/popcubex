import React from 'react';
import PullRequest from './PullRequest';

class PullRequestList extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {

    }
  }

  render() {
    let pull_requests = this.props.items.map(item => <PullRequest key={item.id} item={ item } />);
    return (
        <div className='pull_requests'>
          {pull_requests}
        </div>
    );
  }
}

export default PullRequestList;
