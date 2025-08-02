import React from 'react';

const players = [
  { name: 'Jack', score: 50 },
  { name: 'Michael', score: 70 },
  { name: 'Ann', score: 40 },
  { name: 'John', score: 40 },
  { name: 'Elisabeth', score: 61 },
  { name: 'Sachin', score: 95 },
  { name: 'Dhoni', score: 100 },
  { name: 'Virat', score: 74 },
  { name: 'Jadeja', score: 64 },
  { name: 'Raina', score: 75 },
  { name: 'Rohit', score: 80 },
];

const ListOfPlayers = () => {
  const players70 = players.filter((item) => item.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((item, index) => (
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>

      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {players70.map((item, index) => (
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
