import React from 'react';
import Lottie from 'lottie-react';
import fisherman from '../Lottifiles/fisherman.json';

const Home = () => {
  const lottieStyle = {
    width: '600px',
    height: '600px',
    position: 'absolute',
    left: '5px',
    bottom: '20px',
    zIndex: -1,
  };

  return (
    <div>
      {/* Text Container */}
      <div className="text-container">
        <style>
          {`
            .text-container {
              text-align: center;
              margin-top: 50px;
            }

            .text-content {
              font-family: 'Arial', sans-serif;
              color: black;
              margin: 10px 0;
            }
          `}
        </style>
        <h2 className="text-content">Hello Super Coder</h2>
        <h2 className="text-content">Welcome to Code Like Goat</h2>
        <h3 className="text-content">
          Here you will find a lot of resources to make your coding journey awesome
        </h3>
      </div>

      {/* Lottie Animation */}
      <Lottie 
        animationData={fisherman} 
        loop={true} 
        style={lottieStyle}
      />

      {/* Content Container */}
      <div className="content-container">
        <style>
          {`
            .content-container {
              text-align: center;
              margin-top: 50px;
            }

            .table-container {
              margin: 0 auto;
              max-width: 800px;
              padding: 20px;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }

            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }

            th {
              background-color: #f2f2f2;
            }

            a {
              color: #1da2d8;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }
          `}
        </style>
        <h1>Latest Opportunity in Tech - Use the Following Resources</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Resource Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arsh Goyal</td>
                <td><a href="https://www.youtube.com/channel/UCJqx8MM4gDPDy8TqVVlPyLw" target="_blank" rel="noopener noreferrer">Visit his Youtube channel</a></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div>
          <h1>CP resources:</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
