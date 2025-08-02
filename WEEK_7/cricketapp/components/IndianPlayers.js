import React from 'react';

// a. Destructuring to show odd team players
export function OddPlayers({ first, third, fifth }) {
  return (
    <div>
      <h3>Odd Players</h3>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

export function EvenPlayers({ second, fourth, sixth }) {
  return (
    <div>
      <h3>Even Players</h3>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

export function IndianPlayersList() {
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h3>List of Indian Players Merged:</h3>
      <ul>
        {IndianPlayers.map((player, idx) => (
          <li key={idx}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

const IndianPlayers = () => {
  return (
    <div>
      <OddPlayers first="Sehwag1" third="Virat3" fifth="Yuvraj5" />
      <EvenPlayers second="Dhoni2" fourth="Rohit4" sixth="Raina6" />
      <IndianPlayersList />
    </div>
  );
};

export default IndianPlayers;
