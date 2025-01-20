"use client";

import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  // Explicitly define the type as Date | null
  const [endingDate, setEndingDate] = useState<Date | null>(null);

  useEffect(() => {
    // Set the endingDate dynamically on the client side
    setEndingDate(new Date("2025-02-03"));
  }, []);

  if (!endingDate) return null; // Render nothing until endingDate is set

  return (
    <div>
      <Countdown className="font-bold text-5xl text-yellow-300" date={endingDate} />
    </div>
  );
};

export default CountDown;