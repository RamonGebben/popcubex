import React from 'react';

import {colorLum} from '../util/helpers';

function PullRequest(props){
  return (
      <div className='pull_request' style={{backgroundColor: props.item.color, color: colorLum(props.item.color, -0.5)}}>
          <div className='double-item'>
            <div className='id'>{props.item.id}</div>
            <div className='repo'>{props.item.repo}</div>
          </div>
          <div className='item title'>{props.item.title}</div>
          <div className='item assignee'>{props.item.assignee}</div>
      </div>
  );
}

export default PullRequest;
