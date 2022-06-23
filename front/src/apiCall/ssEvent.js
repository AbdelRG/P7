import EventSource from "eventsource";

const evtSource = new EventSource("http://localhost:3000/stream");

export default evtSource;
