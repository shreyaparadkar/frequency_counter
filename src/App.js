import React, { useState } from 'react'
import { countFreq } from './helpers/utility';
import ChartScreen from './screens/ChartScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [initialRender, setInitialRender] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false)
      const res = await fetch("https://www.terriblytinytales.com/test.txt")
      const d = await res.text();
      setData(countFreq(d));
      setInitialRender(false);
    } catch (error) {
      console.log(error)
      setError(true);
    } finally {
      setLoadingState(false);
    }
  }

  if(initialRender || error) return <HomeScreen error={error} fetchData={fetchData} />
  return <ChartScreen loadingState={loadingState} data={data} />
}

export default App;
