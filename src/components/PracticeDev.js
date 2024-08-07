import React from 'react';

const PracticeDev = () => {
  const youtubeChannelUrl = "https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw"; // Replace with your channel URL

  // Example video URLs, thumbnails, and names
  const videos = [
    {
      url: "https://www.youtube.com/@akshaymarch7",
      thumbnail: "https://yt3.googleusercontent.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s160-c-k-c0x00ffffff-no-rj", // Replace with actual video thumbnail URL
      name: "Akshay Saini",
    },
    {
      url: "https://www.youtube.com/watch?v=videoID2",
      thumbnail: "https://img.youtube.com/vi/videoID2/0.jpg", // Replace with actual video thumbnail URL
      name: "Video Creator 2",
    },
    {
      url: "https://www.youtube.com/watch?v=videoID3",
      thumbnail: "https://img.youtube.com/vi/videoID3/0.jpg", // Replace with actual video thumbnail URL
      name: "Video Creator 3",
    },
  ];

  return (
    <div className="practice-dev-container">
      <style>
        {`
          .practice-dev-container {
            text-align: center;
            margin-top: 50px;
            font-family: 'Arial', sans-serif;
          }

          h1 {
            color: #1da2d8;
          }

          p {
            color: #333;
            font-size: 18px;
            line-height: 1.6;
            margin: 20px auto;
            max-width: 800px;
          }

          .youtube-logo-box {
            display: inline-block;
            border: 1px solid #ddd;
            padding: 20px;
            margin: 20px auto;
            border-radius: 10px;
            background-color: #f9f9f9;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 600px;
            text-align: center;
          }

          .youtube-logo-box img {
            width: 100px; /* Adjust size as needed */
            height: auto;
          }

          .video-thumbnails {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
          }

          .video-thumbnails a {
            display: block;
            width: 160px; /* Adjust size as needed */
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            text-decoration: none;
            color: black;
          }

          .video-thumbnails img {
            width: 100%;
            height: auto;
            display: block;
            transition: opacity 0.3s;
          }

          .video-thumbnails a:hover img {
            opacity: 0.8;
          }

          .video-caption {
            margin-top: 5px;
            font-size: 14px;
            color: #333;
            text-align: center;
          }
        `}
      </style>
      <h1>Want To Learn Development? Follow the Following Resources</h1>
      <p>Here you can practice DAV topics.</p>
      <div className="youtube-logo-box">
        <a
          href={youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" // Replace with your logo URL
            alt="YouTube Logo"
          />
        </a>
      </div>
      <div className="video-thumbnails">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.thumbnail}
              alt={`Video Thumbnail ${index + 1}`}
            />
            <div className="video-caption">{video.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PracticeDev;
