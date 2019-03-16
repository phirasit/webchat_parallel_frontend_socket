const axios = require('axios');
const hostURL = "http://parallel.ojudge.in.th/"
const queryURL = hostURL + "/abci_query"
const boardcastURL = hostURL + "/broadcast_tx_async"

function getMessage(user, group, last_message, limit=20) {
    data = {
        user : user,
        group : group,
        last_message : last_message, 
        limit : limit
    }
    return axios.get(queryURL,  {
        params: {
            type : 'get_message',
            data : data
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
}

function getUnreadMessage(user, group) {
    data = {
        user : user,
        group : group
    }
    return axios.get(queryURL,  {
        params: {
            type : 'get_unread_message',
            data : data
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
}

function createNewGroup(user, group) {
    data = {
        user : user,
        group : group
    }
    json = JSON.stringify(data);
    return axios.get(boardcastURL,  {
        params: {
            type : 'create_group',
            tx : json
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
}

function joinGroup(user, group) {
    data = {
        user : user,
        group : group
    }
    return axios.get(boardcastURL,  {
        params: {
            type : 'join_group',
            tx : data
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
}

function leaveGroup(user, group) {
    data = {
        user : user,
        group : group
    }
    return axios.get(boardcastURL,  {
        params: {
            type : 'leave_group',
            tx : data
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
}

function readMessage(user, group, timestamp) {
    data = { 
        user: user,
        group: group,
        timestamp: timestamp
    }
    return axios.get(boardcastURL, {
        params: {
            type: 'read_message',
            tx : data
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function sentMessage(user, group, message) {
    data = {
        user: user,
        group: group,
        message: message
    }
    return axios.get(boardcastURL, {
        params: {
            type: 'send_message',
            tx : data   
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

module.exports = {
    getMessage: getMessage,
    getUnreadMessage : getUnreadMessage, 
    createNewGroup : createNewGroup,
    joinGroup : joinGroup, 
    leaveGroup : leaveGroup,
    readMessage : readMessage, 
    sentMessage : sentMessage
};
