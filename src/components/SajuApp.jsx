import React from 'react';
import { useState } from 'react';
import './SajuApp.css';

function SajuApp() {
  const [birthdate, setBirthdate] = useState('');
  const [birthHour, setBirthHour] = useState('');
  const [result, setResult] = useState(null);

  const getSaju = () => {
    if (!birthdate || birthHour === '') {
      alert('생년월일과 시간을 입력해주세요!');
      return;
    }

    const fakeResult = {
      yearPillar: '갑자',
      monthPillar: '을축',
      dayPillar: '병인',
      hourPillar: '정묘',
    };
    setResult(fakeResult);
  };

  return (
    <div className="saju-app">
      <h1>🔮 팔자대로</h1>
      <input type="date" onChange={(e) => setBirthdate(e.target.value)} />
      <input
        type="number"
        placeholder="출생 시간 (0~23)"
        onChange={(e) => setBirthHour(e.target.value)}
      />
      <button onClick={getSaju}>내 사주 보기</button>

      {result && (
        <div className="saju-result">
          <h2>사주 결과</h2>
          <p><b>연주:</b> {result.yearPillar}</p>
          <p><b>월주:</b> {result.monthPillar}</p>
          <p><b>일주:</b> {result.dayPillar}</p>
          <p><b>시주:</b> {result.hourPillar}</p>
        </div>
      )}
    </div>
  );
}

export default SajuApp;