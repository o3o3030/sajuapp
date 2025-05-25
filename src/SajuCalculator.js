// SajuCalculator.js

import { dayGanjiMap } from './dayGanjiMap';

const heavenlyStems = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const earthlyBranches = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];

const ganji60 = [];
for (let i = 0; i < 60; i++) {
  ganji60.push(heavenlyStems[i % 10] + earthlyBranches[i % 12]);
}

const hourBranches = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];

const monthStemOffset = {
  '갑': 2, '을': 4, '병': 6, '정': 8, '무': 0,
  '기': 2, '경': 4, '신': 6, '임': 8, '계': 0,
};

const monthBranches = ['인', '묘', '진', '사', '오', '미', '신', '유', '술', '해', '자', '축'];

function getYearPillar(year) {
  const baseYear = 1984; // 갑자년
  const offset = (year - baseYear + 60) % 60;
  return ganji60[offset];
}

function getMonthPillar(yearStem, month) {
  const stemOffset = monthStemOffset[yearStem];
  const stem = heavenlyStems[(stemOffset + month - 1) % 10];
  const branch = monthBranches[month - 1];
  return stem + branch;
}

function getDayPillar({ year, month, day }) {
  const key = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return dayGanjiMap[key] || '병인'; // 없으면 임시 기본값
}

function getHourPillar(hour) {
  const index = Math.floor((parseInt(hour, 10) % 24) / 2);
  const branch = hourBranches[index];
  return '정' + branch; // 임시 천간
}

export function calculateSaju({ year, month, day, hour }) {
  const yearPillar = getYearPillar(parseInt(year, 10));
  const yearStem = yearPillar[0];

  const monthPillar = getMonthPillar(yearStem, parseInt(month, 10));
  const dayPillar = getDayPillar({ year, month, day });
  const hourPillar = getHourPillar(hour);

  return {
    yearPillar,
    monthPillar,
    dayPillar,
    hourPillar,
  };
}
