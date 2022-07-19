import React, { useState, useRef, useEffect, useCallback } from "react";
import _ from "lodash";
import Moment from 'react-moment';
import moment from 'moment';
import classNames from 'classnames/bind';
import copy from "copy-to-clipboard";
import ScrollToTop from "react-scroll-to-top";
//import { ReactComponent as MySVG } from "./logo.svg";
import axios from "axios";

export default function App() {

  const dailyExpenses = [20, 10, 25, 3, 45, 5, 6, 7, 8, 9, 10];
  const [mybtn, setMybtn] = useState('Hardik')
  const [myclick, setMyclick] = useState(0)
  const [name, setName] = useState("")
  const [copyText, setCopyText] = useState('');
  const [joke, setJoke] = useState("Please wait...");
  const [count, setCount] = useState(0);
    
    const notMinus = () => {
        if (count <= 0) {
            return
        } else {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'

        const fetchData = async() => {
            const res = await fetch(url)
            const json = await res.json()
            console.log(json)
        }
        fetchData()
    },[])

    useEffect(() => {
        document.title = `you have clicked ${count}`
    })

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }

  const copyToClipboard = () => {
    copy(copyText);
  }

  useEffect(() => {
    axios("https://icanhazdadjoke.com", {
      headers: {
        "Accept": "application/json",
        "User-Agent": "Zeolearn"
      }
    }).then(res => setJoke(res.data.joke));
  }, []);

  const handleClick = () => {
    setMybtn('Bhoomi')
  }

  function Hellopro(props) {
    return <h1>{props.msg}: Hardik</h1>;
  }
  const mypropsmsg = <Hellopro msg="What is your Name" />
  if (myclick < 0) {
    setMyclick(0)
    alert('Your limit is finished...')
  }

  const withoutlodash = dailyExpenses.reduce(function (a, b) {
    return a + b;
  }, 0);

  const withlodash = _.sum(dailyExpenses);

  const range = _.range(10);

  let words = ['Labs', 'Build', 'forest', 'falcon', 'pear', 'ocean', 'Aureate'];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let fir = _.first(words);

  let las = _.last(words);

  let slice = _.slice(words, 2, 6);
  console.log(slice);
  let mychunk = _.chunk(nums, 3);
  console.log(mychunk);
  const dateToFormat = '1976-04-19T12:59-0500';
  console.log(dateToFormat);
  const start = moment().add(-4, 'm'); const date = new Date();
  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };
  const dateToFormatt = '1976-04-19T12:59-0500';
  const unixTimestamp = 198784740;
  const calendarStrings = {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L'
  };
  return (
    <div>
      <div>Counter {count}</div>
      <button onClick={() => setCount(count + 1)}>Addition</button>
      <button onClick={notMinus} disabled={count === 0}>Substraction</button>
      <ScrollToTop smooth />
      <Moment date={dateToFormat} />
      <h2>Total expenses this week: {withlodash}</h2>
      <h2>Total expenses this week: {withoutlodash}</h2>
      <div>
      Dad says,"{joke}"
      </div>
      <button onClick={handleClick}>{mybtn}</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> - {name}

      <h2>Copy to Clipboard:</h2>
      <div>
        <input type="text" value={copyText} onChange={handleCopyText} placeholder='Enter the text' />
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
        <input type="text" placeholder='Enter the text you have copied' />
      </div>
      <div>
        {mypropsmsg}
        <button onClick={() => setMyclick(myclick + 1)}>Click for Increment </button> <p>{myclick}</p>
        <button onClick={() => setMyclick(myclick - 1)}>Click for Decrement</button>
      </div>
      <ul>
        {dailyExpenses.map(function (expense, index) {
          return <li key={index}>{expense}</li>;
        })}
      </ul>
      <div>Range - {range}</div>
      <div>{fir} | {las}</div>
      <div>Slice - {slice}</div>
      <Moment format="YYYY/MM/DD">
        1976-04-19T12:59-0500
      </Moment> |
      <Moment parse="YYYY-MM-DD HH:mm">
        1976-04-19 12:59
      </Moment><hr />
      <Moment fromNow add={{ hours: 12 }}>{date}</Moment><hr />
      <Moment fromNow>1976-04-19T12:59-0500</Moment><hr />
      <Moment fromNow subtract={{ hours: 12 }}>{date}</Moment><hr />
      <Moment fromNow subtract={{ days: 1, hours: 12 }}>{date}</Moment>   <hr />
      <Moment >{dateToFormatt}</Moment>   <hr />
      <Moment date="2018-11-1T12:59-0500" durationFromNow />   <hr />
      <Moment unix>{unixTimestamp}</Moment><hr />
      <Moment calendar={calendarStrings.sameDay}>1976-05-19</Moment><hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
    </div>
  );
}

export default App;