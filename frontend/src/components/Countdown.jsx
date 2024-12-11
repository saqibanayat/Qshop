import { useCallback, useEffect, useState } from "react";

const Countdown = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    let days =
      Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDifference / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )
        : `0${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;
    if (timeDifference < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 0,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex w-auto ">
      <div className="mx- mt-12 bg-Highlight sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 ">
        <div className="flex justify-between sm:px-4 gap-5 h-44 w-auto  items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="md:py-5 py-3 px-3 md:px-5 flex justify-center items-center bg-[#6CA7F3] text-white md:text-3xl text-2xl font-semibold rounded-md">
              {countDownTime?.days}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-3xl font-bold mb-10">:</span>
          <div className="flex flex-col justify-center items-center gap-3">
          <span className="md:py-5 py-3 px-3 md:px-5 flex justify-center items-center bg-[#6CA7F3] text-white md:text-3xl text-2xl font-semibold rounded-md">
              {countDownTime?.hours}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-3xl font-bold mb-10">:</span>
          <div className="flex flex-col justify-center items-center gap-3">
          <span className="md:py-5 py-3 px-3 md:px-5 flex justify-center items-center bg-[#6CA7F3] text-white md:text-3xl text-2xl font-semibold rounded-md">
              {countDownTime?.minutes}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <span className="text-[#FBFAF8] text-3xl font-bold mb-10">:</span>
          <div className="flex flex-col justify-center items-center gap-3">
          <span className="md:py-5 py-3 px-3 md:px-5 flex justify-center items-center bg-[#6CA7F3] text-white md:text-3xl text-2xl font-semibold rounded-md">
              {countDownTime?.seconds}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
