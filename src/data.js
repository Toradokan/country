import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [
        {
            name:"Enjoy Country",
            artist: "Music",
            cover: "https://i1.sndcdn.com/avatars-000612486456-ldgtx0-t500x500.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://icepool.silvacast.com/COUNTRY108.mp3",
            active: false,
        },
        {
            name:"Old Country",
            artist: "Music",
            cover: "https://i1.sndcdn.com/avatars-000612486456-ldgtx0-t500x500.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://streaming.radiostreamlive.com/radiocountrylive_devices",
            active: false,
        },
        {
            name:"Just Country",
            artist: "Music",
            cover: "https://i1.sndcdn.com/avatars-000612486456-ldgtx0-t500x500.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://my.ssl-stream.com/CMR-Nashville",
            active: false,
        },
        {
            name:"Country for you",
            artist: "Music",
            cover: "https://i1.sndcdn.com/avatars-000612486456-ldgtx0-t500x500.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://ais-sa2.cdnstream1.com/1398_128",
            active: false,
        },
        {
            name:"Classic Country",
            artist: "Music",
            cover: "https://i1.sndcdn.com/avatars-000612486456-ldgtx0-t500x500.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://strm112.1.fm/acountry_mobile_aac",
            active: false,
        },
        {
            name:"Country Live",
            artist: "Music",
            cover: "https://i1.sndcdn.com/avatars-000612486456-ldgtx0-t500x500.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://s2.radio.co/sf0dcfa39a/listen",
            active: false,
        },
    ];
}

export default chillHop;

