import React from 'react';
import styles from './_News.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { Article } from '../../types/Article';
import Image from 'next/image';
import moment from 'moment';

export type NewsProps = {
  articles: Article[];
};

export default function News({ articles }: NewsProps) {
  moment.locale('fr', {
    months:
      'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
        '_',
      ),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm',
    },
    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M';
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week: {
      dow: 1,
      doy: 4,
    },
  });

  moment.locale('fr');

  const convertToDateString = (date: Date) => {
    return moment(date).fromNow();
  };

  return (
    <div className='News' data-scroll-section>
      <BigTitle position='left'>
        <h1>
          <span>Nos actualités</span>
        </h1>
      </BigTitle>
      <div className={styles['articles']}>
        {articles.map((article) => (
          <div key={article._id} className={styles['article']}>
            <div className={styles['image']}>
              <Image src={article.image} layout='fill'></Image>
            </div>
            <div className={styles['texts']}>
              <span>{convertToDateString(article.date)}</span>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3000/api/articles');
  const json = await data.json();
  const articles = json.articles;

  return {
    props: {
      articles: articles,
    },
  };
}
