"use client";

import React, { useState } from "react";
import styles from "./TwitchStats.module.scss";
const axios = require("axios").default;

export default function TwitchStats() {
  const [stats, setStats] = useState([]);

  axios
    .get("https://twitchtracker.com/api/channels/summary/kupppir", {
      withCredentials: true,
      crossDomain: true,
    })
    .then((response) => {
      setStats(response.data);
    })
    .catch((err) => console.error(err));

  return (
    <div className={styles.twitchStats}>
      <div className={styles.titles}>
        <h3>Twitch İstatistikleri</h3>
        <h4>(Son 1 Ay)</h4>
      </div>
      <div className={styles.stats}>
        <span className={styles.statsText}>
          Takipçi: {stats.followers_total || "-"}
        </span>
        <span className={styles.statsText}>
          Toplam İzlenme (saat): {stats.hours_watched || "-"}
        </span>
        <span className={styles.statsText}>
          Ortalama İzleyici: {stats.avg_viewers || "-"}
        </span>
        <span className={styles.statsText}>
          Yayın Süresi (dakika): {stats.minutes_streamed || "-"}
        </span>
      </div>
    </div>
  );
}
