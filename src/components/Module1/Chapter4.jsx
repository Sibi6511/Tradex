import React from 'react';
import { Link } from 'react-router-dom';

const Chapter4 = () => {
  return (
    <div className="chapter">
      <h1 className="chapter-title">4. Regulators, the Guardians of Capital Markets</h1>


      <h2>4.1 – What is the Stock Market?</h2>
      <p>
        In the previous chapter, we established that investing in equities is vital to generate inflation-beating returns.
        Having said that, how do we go about investing in equities? Before we dwell further into this topic, it is
        essential to understand the market ecosystem and the many different entities involved in making our capital market
        journey smooth.
      </p>
      <p>
        Just like the way we go to the neighborhood kirana store or a supermarket to shop for our daily needs, similarly,
        we go to the stock market to shop (read as transact) for investments. The stock market is where all the participants
        who wish to transact in shares go. Transact means to buy or sell shares in the context of stock markets. The primary
        purpose of the stock market is to help you facilitate your transactions. So if you want to buy shares of a company,
        the stock market helps you meet the seller and vice versa.
      </p>
      <p>
        Unlike a supermarket, the stock market does not exist in a brick-and-mortar form. It exists in electronic form. You
        access the market electronically from your computer and conduct transactions (buy or sell). It is also important to
        note that you can access the stock market via a registered intermediary called the stockbroker. We will discuss the
        stockbrokers at a later point.
      </p>
      <p>
        India has two stock exchanges – the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). There were many
        other exchanges earlier, but none of them survived. So when you talk about the stock markets in India, you are
        essentially referring to either NSE or BSE. Older stock exchanges like Bangalore Stock Exchange (BgSE), Madras Stock
        Exchange (MSE), Calcutta Stock Exchange (CSE) have either merged with BSE/NSE or shut shop.
      </p>

      <h2>4.2 – Market Participants and the Need to Regulate Them</h2>
      <p>
        The stock market attracts individuals and corporations from diverse backgrounds. Anyone who transacts in the stock market
        is called a market participant. The market participant can be classified into various categories –
      </p>
      <ul>
        <li>Domestic Retail Participants – These are people like you and me transacting in markets</li>
        <li>NRI’s and OCI – These are people of Indian origin but based outside India</li>
        <li>Domestic Institutions – These are corporate entities in India</li>
        <li>Domestic Asset Management Companies (AMC) – Mutual fund companies like SBI Mutual Fund, HDFC AMC, Edelweiss, ICICI Pru, etc.</li>
        <li>Foreign Institutional Investors – Non-Indian corporate entities. These could be foreign asset management companies, hedge funds, and other investors.</li>
      </ul>
      <p>
        Now, irrespective of who participates in the market, the agenda for all is to make profitable transactions. More bluntly
        put – to make money.
      </p>
      <p>
        When money is involved, human emotions such as greed and fear run high. One can easily fall prey to these emotions and
        get involved in unfair practices. India has its fair share of such unethical practices. Given this, the stock markets
        need someone who can set the game rules (commonly referred to as regulation and compliance) and ensure that people
        adhere to these regulations and compliance, thereby making the markets a level playing field for everyone.
      </p>

      <h2>4.3 – The Regulator</h2>
      <p>
        In India, the stock market regulator is called The Securities and Exchange Board of India, often referred to as SEBI.
        SEBI aims to promote the development of stock exchanges, protect the interest of retail investors, and regulate market
        participants’ and financial intermediaries’ activities. In general, SEBI ensures:
      </p>
      <ul>
        <li>The stock exchange conducts its business fairly</li>
        <li>Stockbrokers conduct their business fairly</li>
        <li>Participants don’t get involved in unfair practices</li>
        <li>Corporates don’t use the markets to benefit themselves (Satyam Computers) unduly</li>
        <li>Small investors’ interests are protected</li>
        <li>Large investors with mega cash piles should not manipulate the markets</li>
        <li>Overall development of markets</li>
      </ul>
      <p>
        Given the above objectives, it becomes imperative for SEBI to regulate all the entities which are involved in the market.
        All the entities mentioned below are directly involved in the stock markets. Malpractice by any of the following entities
        can disrupt what is otherwise a harmonious market in India.
      </p>
      <p>
        SEBI has prescribed a set of rules and regulations for each entity. The entity should operate within the legal framework as
        prescribed by SEBI. The specific rules applicable to a specific entity are made available by SEBI on its website. They are
        published under the ‘Legal Framework’ section of their site.
      </p>

      <table>
        <thead>
          <tr>
            <th>Entity</th>
            <th>Example of Companies</th>
            <th>What do they do?</th>
            <th>In Simpler Words</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Credit Rating Agency (CRA)</td>
            <td>CRISIL, ICRA, CARE</td>
            <td>They rate the creditworthiness of corporate and governments</td>
            <td>If a corporate (or Govt) entity wants to avail loan (debt financing), CRAs check for creditworthiness and assign a rating, the basis on which other entities can decide to extend a loan or not.</td>
          </tr>
          <tr>
            <td>Debenture Trustees</td>
            <td>Almost all banks in India</td>
            <td>Act as a trustee to corporate debenture</td>
            <td>When companies want to raise a loan, they can issue debentures against which they promise to pay interest. The public can subscribe to these debentures. A Debenture Trustee ensures that the debenture obligation is honored.</td>
          </tr>
          <tr>
            <td>Depositories</td>
            <td>NSDL and CDSL</td>
            <td>Safekeeping, reporting, and settlement of clients’ securities</td>
            <td>They act like a digital vault for your shares. The depositories hold your shares and facilitate the exchange of your securities. When you buy shares, these shares sit in your Depositary account, usually referred to as the DEMAT account.</td>
          </tr>
          <tr>
            <td>Depository Participant (DP)</td>
            <td>Most of the banks and few stockbrokers</td>
            <td>Act as an agent to the depositories</td>
            <td>You cannot directly interact with NSDL or CDSL. You must liaise with a DP to open and maintain your DEMAT account.</td>
          </tr>
          <tr>
            <td>Foreign Institutional Investors (FII)</td>
            <td>Foreign corporate, funds and individuals</td>
            <td>Make investments in India</td>
            <td>These are foreign entities with interest in investing in India. They usually transact large amounts of money, and hence their activity in the markets has an impact in terms of market sentiment.</td>
          </tr>
          <tr>
            <td>Merchant Bankers</td>
            <td>Karvy, Axis Bank, Edelweiss Capital</td>
            <td>Help companies raise money in the primary markets</td>
            <td>If a company plans to raise money by floating an IPO, then merchant bankers are the ones who help companies with the IPO process.</td>
          </tr>
          <tr>
            <td>Asset Management Companies (AMC)</td>
            <td>HDFC AMC, Reliance Capital, SBI Capital</td>
            <td>Offer Mutual Fund Schemes</td>
            <td>An AMC collects money from the public, puts that money in a single account, and then invests that money in markets intending to make the investments grow and generate wealth.</td>
          </tr>
          <tr>
            <td>Portfolio Managers/ Portfolio Management System (PMS)</td>
            <td>Capitalmind Wealth PMS, Motilal PMS, Parag Parikh PMS</td>
            <td>Offer PMS schemes</td>
            <td>They work similarly to a mutual fund except in a PMS; you have to invest a minimum of Rs.50,00,000; however, there is no such cap in a mutual fund.</td>
          </tr>
          <tr>
            <td>Stock Brokers</td>
            <td>Zerodha, Sharekhan, ICICI Direct</td>
            <td>Act as an intermediary between an investor and the stock exchange</td>
            <td>Stock brokers act as a gateway to the stock markets, giving electronic access to stock markets to facilitate transactions.</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Takeaways from This Chapter</h2>
      <ul>
        <li>The stock market is the place to transact in equities.</li>
        <li>Stock markets exist electronically and can be accessed through a stockbroker.</li>
        <li>There are many different market participants operating in the stock markets.</li>
        <li>Every entity operating in the market has to be regulated and can operate only within the framework prescribed by the regulator.</li>
        <li>SEBI is the regulator of the securities market in India. They set the legal framework and regulate all entities interested in operating in the market.</li>
        <li>Most importantly, you need to remember that SEBI is aware of what you are doing, and they can flag you down if you are up to something fishy in the markets!</li>
      </ul>
      <div className="navigation">
        <Link to="/chapter3" className="next-button">Previous</Link>
        &emsp;&emsp;&emsp;&emsp;
        <Link to="/chapter1" className="next-button">Next</Link>
      </div>
    </div>
  );
};

export default Chapter4;
