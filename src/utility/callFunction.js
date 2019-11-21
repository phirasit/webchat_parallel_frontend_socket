const axios = require('axios');
// const hostURL = "http://parallel.ojudge.in.th/"
const hostURL = "http://webchat-abci:8080/"
const queryURL = hostURL + "abci_query"
const boardcastURL = hostURL + "broadcast_tx_sync"



function convertMessage(message, userID) {

  /*
  group: "12345"
  id: "1"
  message: "Hello world"
  prevID: ""
  timestamp: 0
  user: "1"
  */
  console.log('original mes', message)
  let len = message.num_messages
  let realMessage = message.messages
  // console.log(len, realMessage)
  let arr_messages = []
  for (let i = 0; i < len; i++) {
    arr_messages[i] = {
      clientName: realMessage[i].user,
      isLeft: (userID === realMessage[i].user) ? "false" : "true",
      time: realMessage[i].time,
      texts: realMessage[i].message,
      timestamp: realMessage[i].timestamp
    }
  }
  return arr_messages
}

function generateNonce() {
  let data = Math.random().toString(36).substring(7);
  let buff = new Buffer(data);
  let base64data = buff.toString('base64');
  return base64data;
}

export async function getMessage(user = null, group = null, last_message = null, limit = 100) {
  console.log(user, group)

  var data = {
    user: user,
    group: group,
    last_message: last_message,
    limit: limit
  }
  var str = JSON.stringify({ type: 'get_message', data: data });
  str = str.split("\"").join("\\\"")
  const response = await axios.get(queryURL, {
    params: {
      data: "\"" + str + "\""
    }
  })

  if (response.data.result.response.log === "OK") {
    // console.log("Got a message")
    let message = JSON.parse(Buffer.from(response.data.result.response.value, 'base64').toString('ascii'))
    // let ret = { code: 1, message: message }
    let returnMessage = convertMessage(message, user)
    console.log(returnMessage)
    // console.log(ret)
    return returnMessage
    // console.log(JSON.parse(Buffer.from(response.data.result.response.value, 'base64').toString('ascii')))
  }
  else {
    let log = response.data.result.response.log
    console.log("Error : " + log)
    let ret = { code: 0, message: log }
    return ret
  }

}

export async function getUnreadMessage(user, group) {
  let data = {
    user: user,
    group: group
  }
  let str = JSON.stringify({ type: 'get_unread_message', data: data });
  str = str.split("\"").join("\\\"")
  const response = await axios.get(queryURL, {
    params: {
      // data : '\"'+JSON.stringify({ type: 'get_unread_message', data: json })+'\"'
      data: "\"" + str + "\""
    }
  })

  if (response.data.result.response.log === "OK") {
    // console.log("Got a message")
    let message = JSON.parse(Buffer.from(response.data.result.response.value, 'base64').toString('ascii'))
    let ret = { code: 1, message: message }
    console.log(ret)
    return ret
    // console.log(JSON.parse(Buffer.from(response.data.result.response.value, 'base64').toString('ascii')))
  }
  else {
    let log = response.data.result.response.log
    console.log("Error : " + log)
    let ret = { code: 0, message: log }
    return ret
  }

}
/*
http://parallel.ojudge.in.th/abci_query?data="{\"type\":\"get_unread_message\",\"data\":{\"user\":\"1\",\"group\":\"123\"}}"
http://parallel.ojudge.in.th/abci_query?data="{"type":"get_unread_message","data":{"user":"1","group":"123"}}"

*/

export async function createNewGroup(user, group) {
  let data = {
    user: user,
    group: group
  }
  let nonce = generateNonce()
  let str = JSON.stringify({ type: 'create_group', data: data, nonce: nonce });
  str = str.split("\"").join("\\\"")
  const response = await axios.get(boardcastURL, {
    params: {
      tx: "\"" + str + "\""
    }
  })

  if (!response.data.error) {
    console.log(response.data.result);
    return response.data.result;
  }
  else {
    console.log("ERR " + response.data.error)
    return response.data.error;
  }

}

export async function joinGroup(user, group) {
  let data = {
    user: user,
    group: group
  }
  console.log("joining ", user, " ", group)
  let nonce = generateNonce();
  // let str = JSON.stringify({ type: 'join_group', data: data });
  let str = JSON.stringify({ type: 'join_group', data: data, nonce: nonce });

  str = str.split("\"").join("\\\"")
  const response = await axios.get(boardcastURL, {
    params: {
      tx: "\"" + str + "\""
    }
  })

  if (!response.data.error) {
    console.log(response.data.result);
    return response.data.result;
  }
  else {
    // console.log("Err")
    console.log(response.data.error)
    return response.data.error;
  }
}

export function leaveGroup(user, group) {
  let data = {
    user: user,
    group: group
  }
  let nonce = generateNonce();
  let str = JSON.stringify({ type: 'leave_group', data: data, nonce: nonce });
  str = str.split("\"").join("\\\"")
  axios.get(boardcastURL, {
    params: {
      tx: "\"" + str + "\""
    }
  })
    .then(function (response) {
      if (!response.data.error) {
        console.log(response.data.result);
        return response.data.result;
      }
      else {
        // console.log("Err")
        console.log(response.data.error)
        return response.data.error;
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export function readMessage(user, group, timestamp) {
  let data = {
    user: user,
    group: group,
    timestamp: timestamp
  }
  console.log("reading", data)
  let nonce = generateNonce()
  let str = JSON.stringify({ type: 'read_message', data: data, nonce: nonce });
  str = str.split("\"").join("\\\"")
  axios.get(boardcastURL, {
    params: {
      tx: "\"" + str + "\""
    }
  })
    .then(function (response) {
      if (!response.data.error) {
        console.log(response.data.result);
        return response.data.result;
      }
      else {
        console.log("Err")
        console.log(response.data.error)
        return response.data.error;
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export function sendMessage(user, group, message) {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  let data = {
    user: user,
    group: group,
    message: message,
    time: time
  }
  // console.log(data)
  let str = JSON.stringify({ type: 'send_message', data: data });
  str = str.split("\"").join("\\\"")
  axios.get(boardcastURL, {
    params: {
      tx: "\"" + str + "\""
    }
  })
    .then(function (response) {
      if (!response.data.error) {
        console.log('PASS')
        console.log(response.data.result);
        return response.data.result;
      }
      else {
        console.log("Err")
        console.log(response.data.error)
        return response.data.error;
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}


