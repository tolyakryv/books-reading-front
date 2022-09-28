import getPadTime from "./getPadTime";

const transformMSTime = (time) => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = getPadTime(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = getPadTime(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = getPadTime(Math.floor((time % (1000 * 60)) / 1000));
  return [days, hours, minutes, seconds];
};

export default transformMSTime;
