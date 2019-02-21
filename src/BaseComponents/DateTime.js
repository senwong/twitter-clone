import React from "react";
import Text from "./Text";
import PropTypes from "prop-types";

export default function DateTime(props) {
  const dateTime = Date.parse(props.dateTime);
  let timeDesc;
  if (isNaN(dateTime)) return;
  /*
  距此时一小时之类： x分钟
  今天之内：距离此时的时间 x小时
  今年之内： x月xx日
  x年x月x日
  */
  const now = Date.now();
  const timeCap = now - dateTime;
  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;
  if (timeCap < oneHour) {
    timeDesc = Math.round(timeCap / oneMinute) + "分钟";
  } else if (
    timeCap < oneDay &&
    new Date(now).getDate() === new Date(dateTime).getDate()
  ) {
    timeDesc = Math.round(timeCap / oneHour) + "时";
  } else if (new Date(now).getFullYear() === new Date(dateTime).getFullYear()) {
    timeDesc =
      new Date(dateTime).getMonth() +
      "月" +
      new Date(dateTime).getDate() +
      "日";
  } else {
    timeDesc =
      new Date(dateTime).getFullYear() +
      "年" +
      new Date(dateTime).getMonth() +
      "月" +
      new Date(dateTime).getDate() +
      "日";
  }

  return <Text secondary>{timeDesc}</Text>;
}
Date.propTypes = {
  dateTime: PropTypes.string.isRequired
};
