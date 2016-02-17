import React from 'react';

import {colorLum} from '../util/helpers';

function PullRequest(props){
  return (
      <div className={props.item.class}>
          <div className='item double-item'>
            <div className='item_id'><small>#</small>{props.item.id}</div>
            <div className='item_repo'><span className="repo_root">{props.item.reporoot}</span> / {props.item.repo}</div>
          </div>
          <div className='item item_title'>{props.item.title}</div>
          <div className='item item_assignee'>{props.item.assignee}</div>
      </div>
  );
}

export default PullRequest;
