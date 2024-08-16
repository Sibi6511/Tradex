import React from 'react';
import { Link } from 'react-router-dom';

const Chapter1 = () => {
  return (
    <div className="chapter">
      <h1 className="chapter-title">1. The Need to Invest</h1>
      
      <h2>1.1 – Why should I invest?</h2>
      <p>
        Before we address the above question, let us understand what would happen if one chooses not to invest.
        Assume you earn Rs.50,000/- per month, and you spend Rs.30,000/- towards your day-to-day living; this can
        include expenses like housing, food, transport, shopping, medical, etc. The balance of Rs.20,000/- is your
        monthly surplus.
      </p>
      
      <p>
        For the sake of simplicity, let us ignore the tax effect in this discussion.
      </p>

      <p>
        To drive the point across, let us make a few simple assumptions:
        <ul>
          <li>The employer is kind enough to give you a 10% salary hike every year.</li>
          <li>The cost of living is likely to go up by 8% yearly.</li>
          <li>You are 30 years old and plan to retire at 50, this translates to 20 working years.</li>
          <li>You don’t intend to work after you retire.</li>
          <li>Your expenses are fixed, and you don’t foresee any other expenses.</li>
          <li>The balance cash of Rs.20,000/- per month is retained as hard cash.</li>
        </ul>
      </p>

      <p>Going by these assumptions, here is what the cash balance will look like in 20 years.</p>

      <table>
        <thead>
          <tr>
            <th>Years</th>
            <th>Yearly Income</th>
            <th>Yearly Expense</th>
            <th>Cash Retained</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>600,000</td>
            <td>360,000</td>
            <td>240,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>660,000</td>
            <td>388,800</td>
            <td>271,200</td>
          </tr>
          <tr>
            <td>3</td>
            <td>726,000</td>
            <td>419,904</td>
            <td>306,096</td>
          </tr>
          <tr>
            <td>4</td>
            <td>798,600</td>
            <td>453,496</td>
            <td>345,104</td>
          </tr>
          <tr>
            <td>5</td>
            <td>878,460</td>
            <td>489,776</td>
            <td>388,684</td>
          </tr>
          <tr>
            <td>6</td>
            <td>966,306</td>
            <td>528,958</td>
            <td>437,348</td>
          </tr>
          <tr>
            <td>7</td>
            <td>1,062,937</td>
            <td>571,275</td>
            <td>491,662</td>
          </tr>
          <tr>
            <td>8</td>
            <td>1,169,230</td>
            <td>616,977</td>
            <td>552,254</td>
          </tr>
          <tr>
            <td>9</td>
            <td>1,286,153</td>
            <td>666,335</td>
            <td>619,818</td>
          </tr>
          <tr>
            <td>10</td>
            <td>1,414,769</td>
            <td>719,642</td>
            <td>695,127</td>
          </tr>
          <tr>
            <td>11</td>
            <td>1,556,245</td>
            <td>777,213</td>
            <td>779,032</td>
          </tr>
          <tr>
            <td>12</td>
            <td>1,711,870</td>
            <td>839,390</td>
            <td>872,480</td>
          </tr>
          <tr>
            <td>13</td>
            <td>1,883,057</td>
            <td>906,541</td>
            <td>976,516</td>
          </tr>
          <tr>
            <td>14</td>
            <td>2,071,363</td>
            <td>979,065</td>
            <td>1,092,298</td>
          </tr>
          <tr>
            <td>15</td>
            <td>2,278,499</td>
            <td>1,057,390</td>
            <td>1,221,109</td>
          </tr>
          <tr>
            <td>16</td>
            <td>2,506,349</td>
            <td>1,141,981</td>
            <td>1,364,368</td>
          </tr>
          <tr>
            <td>17</td>
            <td>2,756,984</td>
            <td>1,233,339</td>
            <td>1,523,644</td>
          </tr>
          <tr>
            <td>18</td>
            <td>3,032,682</td>
            <td>1,332,006</td>
            <td>1,700,676</td>
          </tr>
          <tr>
            <td>19</td>
            <td>3,335,950</td>
            <td>1,438,567</td>
            <td>1,897,383</td>
          </tr>
          <tr>
            <td>20</td>
            <td>3,669,545</td>
            <td>1,553,652</td>
            <td>2,115,893</td>
          </tr>
        </tbody>
      </table>

      <p>Total Income: Rs.17,890,693</p>

      <p>
        If one were to analyze these numbers, one would soon realize this is a scary situation. A few things are quite obvious:
      </p>
      <ul>
        <li>After 20 years of hard work, you have accumulated Rs.1.7Crs.</li>
        <li>Since your expenses are fixed, your lifestyle has not changed over the years, and you probably even suppressed your lifelong aspirations – a better home, car, vacations, etc.</li>
        <li>After you retire, assuming the expenses will continue to grow at 8%, the retirement corpus of Rs.1.7Crs is good enough to sail you through roughly 8 years of post-retirement life. 8th year onwards, you will be in a tight spot with literally no savings left to back you up.</li>
      </ul>
      <p>
        What would you do after you run out of money in 8 years? How do you fund your life? Is there a way to ensure that you collect a more considerable sum at the end of 20 years?
      </p>
      <p>
        At this point, you may think that the assumptions are simple and that real life does not work like this. I agree, and I won’t dispute that fact. However, the point to note in the above calculation is that no investments are made, hence the cash retained has a flat or zero growth.
      </p>
      <p>
        Let’s consider another scenario where instead of keeping the cash idle, you choose to invest the cash in an investment option that grows at, let’s say, 12% per annum. For example – in the first year, you retained Rs.240,000/- which, when invested at 12% per annum for 20 years (19 years assuming you invest at the end of 1st year), yields Rs.2,067,063/- at the end of the 20th year. For those interested in math, here is how that works:
      </p>
      <p>
        = 240000*(1+12%)^(19) <br />
        = 2067063
      </p>
      <p>
        Don't worry about the math at this point. We will explain that later in this module (and several other modules in Varsity). Here is how the table looks if you choose to invest.
      </p>

      <table>
        <thead>
          <tr>
            <th>Years</th>
            <th>Yearly Income</th>
            <th>Yearly Expense</th>
            <th>Cash Retained</th>
            <th>Value at the end of 20 years</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>600,000</td>
            <td>360,000</td>
            <td>240,000</td>
            <td>2,067,063</td>
          </tr>
          <tr>
            <td>2</td>
            <td>660,000</td>
            <td>388,800</td>
            <td>271,200</td>
            <td>2,036,246</td>
          </tr>
          <tr>
            <td>3</td>
            <td>726,000</td>
            <td>419,904</td>
            <td>306,096</td>
            <td>2,005,929</td>
          </tr>
          <tr>
            <td>4</td>
            <td>798,600</td>
            <td>453,496</td>
            <td>345,104</td>
            <td>1,976,097</td>
          </tr>
          <tr>
            <td>5</td>
            <td>878,460</td>
            <td>489,776</td>
            <td>388,684</td>
            <td>1,946,736</td>
          </tr>
          <tr>
            <td>6</td>
            <td>966,306</td>
            <td>528,958</td>
            <td>437,348</td>
            <td>1,917,832</td>
          </tr>
          <tr>
            <td>7</td>
            <td>1,062,937</td>
            <td>571,275</td>
            <td>491,662</td>
            <td>1,889,370</td>
          </tr>
          <tr>
            <td>8</td>
            <td>1,169,230</td>
            <td>616,977</td>
            <td>552,254</td>
            <td>1,861,337</td>
          </tr>
          <tr>
            <td>9</td>
            <td>1,286,153</td>
            <td>666,335</td>
            <td>619,818</td>
            <td>1,833,718</td>
          </tr>
          <tr>
            <td>10</td>
            <td>1,414,769</td>
            <td>719,642</td>
            <td>695,127</td>
            <td>1,806,500</td>
          </tr>
          <tr>
            <td>11</td>
            <td>1,556,245</td>
            <td>777,213</td>
            <td>779,032</td>
            <td>1,779,669</td>
          </tr>
          <tr>
            <td>12</td>
            <td>1,711,870</td>
            <td>839,390</td>
            <td>872,480</td>
            <td>1,753,211</td>
          </tr>
          <tr>
            <td>13</td>
            <td>1,883,057</td>
            <td>906,541</td>
            <td>976,516</td>
            <td>1,727,113</td>
          </tr>
          <tr>
            <td>14</td>
            <td>2,071,363</td>
            <td>979,065</td>
            <td>1,092,298</td>
            <td>1,701,360</td>
          </tr>
          <tr>
            <td>15</td>
            <td>2,278,499</td>
            <td>1,057,390</td>
            <td>1,221,109</td>
            <td>1,675,939</td>
          </tr>
          <tr>
            <td>16</td>
            <td>2,506,349</td>
            <td>1,141,981</td>
            <td>1,364,368</td>
            <td>1,650,837</td>
          </tr>
          <tr>
            <td>17</td>
            <td>2,756,984</td>
            <td>1,233,339</td>
            <td>1,523,644</td>
            <td>1,626,039</td>
          </tr>
          <tr>
            <td>18</td>
            <td>3,032,682</td>
            <td>1,332,006</td>
            <td>1,700,676</td>
            <td>1,601,533</td>
          </tr>
          <tr>
            <td>19</td>
            <td>3,335,950</td>
            <td>1,438,567</td>
            <td>1,897,383</td>
            <td>1,577,305</td>
          </tr>
          <tr>
            <td>20</td>
            <td>3,669,545</td>
            <td>1,553,652</td>
            <td>2,115,893</td>
            <td>1,553,343</td>
          </tr>
        </tbody>
      </table>

      <p>Total Income: Rs.35,937,430</p>

      <p>
        Do note, as the years progressed, your income increased, so did your expenses, but most importantly, the cash retained was immediately invested. The investment gave you a return, and the corpus grew. The total income at the end of 20 years is nearly Rs.3.5Crs, almost twice as much as you would have earned if you chose not to invest. What is noteworthy is the fact that this amount is good enough to sail you through your retirement.
      </p>
      <p>
        This is precisely why you need to consider investing. While investments can help you grow your wealth, it can also help you counter inflation. Let’s discuss this further.
      </p>
          
      <div className="navigation">
        <Link to="/chapter2" className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default Chapter1;
