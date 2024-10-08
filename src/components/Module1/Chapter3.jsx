import React from 'react';
import { Link } from 'react-router-dom';


const Chapter3 = () => {
  return (
    <div className="chapter-container">
      <div className="chapter-content">
        <h1>3.1 – Overview</h1>
        <p>
          Many corporate entities work in tandem to ensure transactions in the market flow smoothly. Right from the time you log in to a trading terminal (let’s say to buy shares), to the time these shares hit your DEMAT account, market intermediaries work seamlessly together to ensure your transactions flow without any hiccups.
        </p>
        <h2>Ch3-title</h2>
        <p>
          These entities play their role quietly behind the scene, always complying with the rules laid out by SEBI and ensuring an effortless and smooth experience for your transactions in the stock market. These entities are generally referred to as Financial Intermediaries or market intermediaries.
        </p>
        <p>
          Together, these financial intermediaries, interdependent on one another, create an ecosystem in which the financial markets operate. Let us quickly review a few of these key market intermediaries and the roles they play in the ecosystem.
        </p>

        <h2>3.2 – The Stock Broker</h2>
        <p>
          The stockbroker is probably one of the most important financial intermediaries you need to know. A stockbroker is a corporate entity registered as a trading member with the stock exchange and holds a stockbroking license. SEBI grants the license through due diligence, and the broker is expected to comply with the rules prescribed by SEBI.
        </p>
        <p>
          A stockbroker is your gateway to the stock markets to make investments in stocks, bonds, ETFs, and Mutual funds. To transact in the stock market, you must set up (open account) with a stockbroker of your choice. Many stock brokers are registered in India, and you can choose a broker based on personal criteria. A few popular filters based on which people select stockbrokers are –
        </p>
        <ul>
          <li>The simplicity of the broker platform</li>
          <li>The efficiency of the broker’s support system</li>
          <li>Access to ready reports – Profit & Loss reports, Tradebook, Tax P&L</li>
          <li>Broker’s net worth (you don't want to deal with a broker who is not profitable or does not have a good P&L)</li>
          <li>Initiatives like education</li>
        </ul>
        <p>
          Once you decide on your broker and open a trading and DEMAT account, you can start transacting in the stock market. After setting up your account, there are a few standard ways to interact with your broker.
        </p>
        <ol>
          <li>
            You can call your broker, identify yourself with your client code (account code) and place an order for your transaction. The dealer at the other end will execute the order for you and confirm the status of the same while you are still on the call.
          </li>
          <li>
            Do it yourself – this is perhaps the most popular way to transact in the markets. The broker gives you access to the market via a ‘Trading Terminal’. After you log in to the trading terminal, you can view live price quotes from the market and place orders yourself. For example, Zerodha’s trading platform is called ‘Kite’.
          </li>
          <li>
            Advanced users can access the market programmatically via APIs. Some of the brokers provide APIs for a fee.
          </li>
        </ol>
        <p>The essential services provided by the broker include…</p>
        <ul>
          <li>Access to the markets and allow you to transact</li>
          <li>Margins for trading, we will discuss this point at a later point</li>
          <li>Support in terms of call and trade, help you resolve queries, educate you on markets</li>
          <li>Issue contract notes for the transactions – A contract note is a written confirmation detailing the transactions you have carried out during the day.</li>
          <li>Facilitate the fund transfer between your trading and bank account</li>
          <li>Provide you with a back-office. The back office is a portal to access many reports about your account. Zerodha’s back office is called Console.</li>
        </ul>
        <p>
          The broker charges a fee for the services provided, also called the ‘brokerage charge’ or just brokerage. The brokerage rates vary, and it’s up to you to find a broker you think strikes a balance between the brokerage charged and the services provided.
        </p>

        <h2>3.3 – Depository and Depository Participants</h2>
        <p>
          When you buy a property, the only way to identify and claim that you own the property is by producing the property papers. Hence, it becomes essential to keep the property papers safe and secure.
        </p>
        <p>
          Likewise, when you buy a share (a share represents part ownership in a company), the only way to claim ownership is by producing your share certificate. A share certificate is nothing but a document entitling you as the owner of the shares in a company. Before 1996 the share certificate was in paper format; however, post-1996, the share certificates were converted to digital form. Converting a paper format share certificate into a digital format share certificate is called “Dematerialization,” often abbreviated as DEMAT.
        </p>
        <p>
          Did you know the Harshad Mehta scam of 1992, played a significant role in digitizing the share certificate? I’d suggest you watch the SonyLiv series on the Harshad Mehta saga, it gives you a good perspective of the market’s ecosystem before it went digital.
        </p>
        <p>
          The share certificate in DEMAT format has to be stored digitally. The storage place for the digital share certificate is the ‘DEMAT Account. A Depository is a financial intermediary that offers the Demat account service.  Think of the demat account as a digital vault for your shares. As you may have guessed, your broker’s trading account and the DEMAT account from the Depository are interlinked.
        </p>
        <p>
          For example, if your idea is to buy Infosys shares, then all you need to do is open your trading account, look for Infosys’ prices, and buy it. Once the transaction is complete, the role of your trading account is done. After you buy, the shares of Infosys will automatically get credited to your demat account.
        </p>
        <p>
          Likewise, when you wish to sell Infosys shares, you must log in to your trading account and sell the stock. The act of selling is carried out in your trading account. But in the backend, because your trading account and demat account are linked, the broker debits your demat account of the shares you have sold.
        </p>
        <p>
          At present, only two depositaries offer DEMAT account services. The National Securities Depository Limited (NSDL) and Central Depository Services (India) Limited. There is virtually no difference between the two, and both operate under strict SEBI regulations.
        </p>
        <p>
          You cannot walk into National Stock Exchange’s (NSE) office to open a trading account, likewise, you cannot walk into a Depository (NSDL or CDSL) to open a demat account. To open a demat account, you must speak to a Depository Participant (DP). A DP helps you set up your DEMAT account with a Depository. A DP acts as an intermediary between you and the Depository. Even the DP is governed by the regulations laid out by the SEBI.
        </p>
        <p>
          Zerodha is a depositary participant of Central Depository Services (India) Limited (CDSL).
        </p>

        <h2>3.4 – Banks</h2>
        <p>
          Banks play a straightforward role in the market ecosystem. They help facilitate the fund transfer from your bank account to your trading account. Both the trading account and bank account are linked. Broker’s link these accounts after verifying your bank account.
        </p>
        <p>
          You can link multiple bank accounts to your trading through which you can transfer funds and trade. Irrespective of how many bank accounts you choose to link with your trading account, funds can be withdrawn to only one bank account. The account you choose to withdraw funds (from your trading account) is called the ‘Primary account.’ At Zerodha, you can add one primary bank account and up to 2 secondary bank accounts. You can add funds to all the bank accounts, but withdrawals are only processed to the primary bank account.
        </p>
        <p>
          Also, dividend payments and money from buybacks will be sent to the primary bank account. The primary bank account is connected to your trading account, the Depository, the Registrar, and the transfer agents (RTA).
        </p>
        <p>
          At this stage, you must have realized that the three financial intermediaries operate via three different accounts – a trading account offered by your broker, demat account offered by the depositary participant, and a Bank account offered by a bank. All three accounts operate electronically and interlinked seamlessly to ensure the smooth operation of transactions.
        </p>

        <h2>3.5 – NSE clearing Limited and ICCL</h2>
        <p>
          NSE Clearing Limited and Indian Clearing Corporation (ICCL) are wholly owned subsidiaries of the National Stock Exchange and Bombay Stock Exchange, respectively.
        </p>
        <p>
          The job of the clearing corporation is to ensure guaranteed settlement of your trades/transactions. For example, if you buy one Biocon share at Rs.446 per share, someone must sell that one share to you at Rs.446. For this transaction, you will be debited Rs.446 from your trading account, and the seller must be credited that Rs.446 toward the sale of Biocon. In a typical transaction like this, the clearing corporation’s role is to ensure the following:
        </p>
        <ul>
          <li>Identify the buyer and seller and match the debit and credit process</li>
          <li>Ensure no defaults – The clearing corporation also ensures no defaults by either party. For instance, after selling the shares, the seller should not be able to back out, thereby defaulting in his transaction.</li>
        </ul>
        <p>
          For all practical purposes, it’s ok not to know much about NSE Clearing Limited or ICCL simply because you, as a trader or investor, would not be interacting with these agencies directly. You need to know these institutions are also heavily regulated and work towards a smooth settlement and efficient clearing activity.
        </p>
        <p>
          Clearing corporations are also involved in the margining process, which is critical while trading complex instruments like futures and options. Perhaps, we will discuss this aspect in a related discussion.
        </p>

        <h3>The key takeaway from this chapter</h3>
        <ul>
          <li>The market ecosystem is built by a cluster of financial intermediaries, each offering services unique to the functioning of markets.</li>
          <li>A stockbroker is your market access, so choose a broker that matches your requirements.</li>
          <li>A stockbroker provides you with a trading account that is used for all market-related transactions (buying and selling of financial instruments like shares)</li>
          <li>A Depository is a corporate entity that holds the shares electronically in your name in your account. Your account with the depository is called the ‘DEMAT’ account.</li>
          <li>There are only two depositories in India – NSDL and CDSL.</li>
          <li>To open a DEMAT account with one of the depositaries, you must liaise with a Depository Participant (DP). A DP functions as an agent to the Depository</li>
          <li>A clearing corporation works towards clearing and settling trades executed by you.</li>
        </ul>
      <div className="navigation">
        <Link to="/chapter2" className="next-button">Previous</Link>
        &emsp;&emsp;&emsp;&emsp;
        <Link to="/chapter4" className="next-button">Next</Link>
      </div>
      </div>
    </div>
  );
};

export default Chapter3;
