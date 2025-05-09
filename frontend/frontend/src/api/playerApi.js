import axios from 'axios';

const API_URL = 'https://iplguesser.onrender.com/api/players'; 

export const getRandomPlayer = async () => {
  const { data } = await axios.get(`${API_URL}/random`);
  return data;
};

export const checkPlayerGuess = async (playerId, guess) => {
  const { data } = await axios.post(`${API_URL}/guess`, { playerId, guess });
  return data;
};

export const getHint = async (p_name) => {
  const { data } = await axios.post(`${API_URL}/hint`,{p_name});
  return data;
}

export const getSquad = async (team, year) => {
    const { data } = await axios.post(`${API_URL}/squad`, { year, team });
    return data;
};

export const leaderBoardUpdate = async (deviceId, score) => {
  const {data} = await axios.post(`${API_URL}/postscore`,{ deviceId , score});
  //await axios.post(`${API_URL}/postscore`,{ deviceId , score});
  return data;
};

export const getLeaderBoard = async () => {
  const { data } = await axios.get(`${API_URL}/getscore`);
  return data
};


