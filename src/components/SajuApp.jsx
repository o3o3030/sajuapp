import React, { useState } from 'react';
import './SajuApp.css';
import { calculateSaju } from '../SajuCalculator';
import { ganjiInterpretations } from '../ganjiInterpretations';


function SajuApp() {
  const [birthdate, setBirthdate] = useState('');
  const [birthHour, setBirthHour] = useState('');
  const [result, setResult] = useState(null);

  const getSaju = () => {
    if (!birthdate || birthHour === '') {
      alert('생년월일과 시간을 입력해주세요!');
      return;
    }

    const [year, month, day] = birthdate.split('-');
    const saju = calculateSaju({
      year,
      month,
      day,
      hour: birthHour,
    });

    setResult(saju);
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
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
      👉 {ganjiInterpretations[result.dayPillar] || '해석 준비 중이에요!'}
          </p>
        </div>
      )}
    </div>
  );
}

export default SajuApp;
