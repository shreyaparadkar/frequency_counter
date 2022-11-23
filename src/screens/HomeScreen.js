import React from 'react'

const HomeScreen = ({error, fetchData}) => {
  return (
    <div className="h-screen animate-gradient flex flex-col justify-center items-center space-y-8 text-white">
      <h1 className="title">Terribly Tiny Tales</h1>
      <button className="button" onClick={fetchData}>
        submit
      </button>
      {error ? (
        <p className="text-sm">Something went wrong! Please try again!</p>
      ) : null}
    </div>
  );
}

export default HomeScreen