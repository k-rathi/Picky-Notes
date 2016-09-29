/*jshint esversion: 6 */

export default (state = {}, action) => {

  if (action.type === 'CREATE_ROOM'){
    // ajax call passing in action.data and then setting state in the success
    console.log(action.data);
    $.ajax({
      method: 'POST',
      url: '/api/rooms',
      data: action.data,
      success: function(res, status){
        console.log('the response: ', res);
        state.roomInfo = res
        // create a socket connection that uses a separate reducer
        // because we need to make sure the same socket exists across all
      },
      error: function( res, status ){
        console.log(res);
      }
    });
    console.log('data:', action.data);
  }


  return state;
};
