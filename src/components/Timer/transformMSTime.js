import getPadTime from "./getPadTime";

const transformMSTime = (countdown) => {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = getPadTime(
    Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = getPadTime(
    Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = getPadTime(Math.floor((countdown % (1000 * 60)) / 1000));
  return [days, hours, minutes, seconds];
};

export default transformMSTime;
