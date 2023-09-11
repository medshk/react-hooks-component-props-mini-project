import React from "react";

export default function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  let result = "";
  const renderMinutes = () => {
    if (minutes >= 30) {
      const times = Math.ceil(minutes / 10);
      const emoji = "🍱";

      return (
        <>
          {emoji.repeat(times)}
          {minutes} min read{" "}
        </>
      );
    } else {
      const times = Math.ceil(minutes / 5);
      const emoji = "☕️ ";

      return (
        <span>
          {" "}
          {emoji.repeat(times)}
          {minutes} min read{" "}
        </span>
      );
    }
  };
  result = renderMinutes();
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {result}
      </small>
      <p>{preview}</p>
    </article>
  );
}
