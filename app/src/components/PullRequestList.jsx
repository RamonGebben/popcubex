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
    return (
        <div className='pull_requests'>
            {this.props.items.map(item => {
                return <PullRequest key={item.id} item={ item } />
            })}
        </div>
    );
  }
}

export default PullRequestList;
