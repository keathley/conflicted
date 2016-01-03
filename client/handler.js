import { Socket } from 'phoenix-socket'

let socket = new Socket("/socket")
socket.connect()

let channel = socket.channel("tweets:stream", {})

channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp); })
  .receive("error", resp => { console.log("Unable to join", resp); })

channel.on("new:tweet", payload => { console.log("got new tweet", payload) })

export default socket
