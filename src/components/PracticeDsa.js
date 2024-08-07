import React from 'react';

const PracticeDsa = () => {
  return (
    <div className="practice-container">
      <style>
        {`
          .practice-container {
            text-align: center;
            margin-top: 50px;
            font-family: 'Arial', sans-serif;
          }

          h1 {
            color: #0039a6;
             font-size: 40px;
          }

          p {
            color: #333;
            font-size: 20px;
            line-height: 1.6;
            margin: 20px auto;
            max-width: 800px;
          }

          .table-container {
            margin: 20px auto;
            max-width: 800px;
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
             font-size: 20px;
          }

          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <h1>Practice DSA</h1>
      <p>Here you can practice Data Structures and Algorithms.</p>
      <p>You can refer to the following sheets to practice problems for your upcoming interviews:</p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>DSA Sheet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Striver</td>
              <td><a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" target="_blank" rel="noopener noreferrer">DSA Sheet 1</a></td>
            </tr>
            <tr>
              <td>Arsh Goyal</td>
              <td><a href="https://docs.google.com/spreadsheets/d/1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE/edit#gid=0" target="_blank" rel="noopener noreferrer">DSA Sheet 2</a></td>
            </tr>
            <tr>
              <td>Leetcode interview prep</td>
              <td><a href="https://leetcode.com/explore/interview/card/top-interview-questions-easy/" target="_blank" rel="noopener noreferrer">DSA Sheet 3</a></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PracticeDsa;
