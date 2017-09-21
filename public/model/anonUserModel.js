'use strict';

const anonUser = {
  query: '', // What the anonUser enters into the form.
  selectedUser: { // The user that's returned from SteamAPI.
    data: {},
  },

};


anonUser.getSteamData = function(steamID, callback){
  // Gets the user from the Steam API.
  // If err, try anonUser.getSteamID(steamID)
};

anonUser.getSteamID = function(vanityURL, callback){
  // If anonUser.getSteamData() returns err, this function will be called.

  // Make call to get the correct SteamID.
  // If anonUser.getSteamID(vanityURL) returns success
  //    .then( steamID => anonUser.getSteamData(steamID) )
  // else alert user to error 'No user found....'
}
