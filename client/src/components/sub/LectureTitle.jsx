import React from 'react';
import Connection from '../../Connection';
import {getCurrentView} from '../../helpers.js'
const LectureTitle = (props) => {
  /*----------  NPM RUN DEV  ----------*/
  var roomInfo = props.getState().room.roomInfo;
  var lecturer = roomInfo.lecturer;
  var topic = roomInfo.topic;
  var createdAt = moment(roomInfo.createdAt).format('MM/DD/YYYY');
  /*----------  //NPM RUN DEV  ----------*/

  /*----------  NPM RUN CLIENT  ----------*/
  // var lecturer = 'Mr Potatohead'
  // var topic = 'World History';
  // var createdAt = ... ;
  /*----------  // NPM RUN CLIENT  ----------*/

  var view = (
    <h3 className="lectureTitle">{topic} by {lecturer}</h3>
  );

  console.log('props...', props);
  var pathname = props.getState().routing.locationBeforeTransitions.pathname;

  if (getCurrentView(pathname) === 'review') {
    console.log('lecturer', lecturer, 'topic', topic, 'createdAt', createdAt);

    view = (
    <div className="review-header">
      <h3 className="lectureTitle">
        {topic} by {lecturer}
      </h3>
      <h3 className="review-date">
        {createdAt}
      </h3>
    </div>
    )
  }
  console.log('view,', view)
  return view;
};

export default Connection(LectureTitle);
