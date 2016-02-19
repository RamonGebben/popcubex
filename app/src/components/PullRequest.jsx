import React from 'react';

import {colorLum} from '../util/helpers';

function PullRequest(props){
  return (
      <div className={props.item.class}>
          <div className='item double-item'>
            <div className='item_id'><small>#</small>{props.item.number}</div>
            <div className='item_repo'><span className="repo_root">{props.item.repository.owner.login}</span> / {props.item.repository.name}</div>
          </div>
          <div className='item item_title'>{props.item.pull_request.title}</div>
          <div className='item item_assignee'>{props.item.pull_request.assignee || 'Unassigned'}</div>
      </div>
  );
}

export default PullRequest;
