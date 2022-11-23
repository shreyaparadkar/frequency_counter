import React from 'react'
import Chart from '../components/Chart';
import Spinner from '../components/Spinner';

const ChartScreen = ({loadingState, data}) => {
  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
      <p className="text-xl md:text-2xl font-bold pt-10 py-6 ">
        Most frequently occuring words
      </p>
      {!loadingState ? <Chart data={data} /> : <Spinner />}
    </div>
  );
}

export default ChartScreen