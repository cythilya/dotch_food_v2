import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/components/footer.css';

const Footer = () => {
  return (
    <div
      className="app-container"
      styleName="footer"
    >
      <div styleName="footer__column">
        <h2 styleName="footer__heading">
          分類
        </h2>
        <div className="align-row">
          <ul className="unordered-list-circle">
            <li>
              <Link to="/tags/美式">
                美式
              </Link>
            </li>
            <li>
              <Link to="/tags/日式">
                日式
              </Link>
            </li>
            <li>
              <Link to="/tags/韓式">
                韓式
              </Link>
            </li>
            <li>
              <Link to="/tags/港式">
                港式
              </Link>
            </li>
            <li>
              <Link to="/tags/泰式">
                泰式
              </Link>
            </li>
          </ul>
          <ul className="unordered-list-circle">
            <li>
              <Link to="/tags/點心、冰品">
                點心、冰品
              </Link>
            </li>
            <li>
              <Link to="/tags/素食">
                素食
              </Link>
            </li>
            <li>
              <Link to="/tags/主題特色">
                主題特色
              </Link>
            </li>
            <li>
              <Link to="/tags/咖啡、茶飲">
                咖啡、茶飲
              </Link>
            </li>
            <li>
              <Link to="/tags/特別推薦">
                特別推薦
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div styleName="footer__column footer__column-2x">
        <h2 styleName="footer__heading">
          熱門討論
        </h2>
        <div
          className="align-row"
          styleName="footer__hot-topic"
        >
          <ul className="unordered-list-circle">
            <li>
              <Link to="/tags/一個人">
                一個人要吃什麼好？
              </Link>
            </li>
            <li>
              <Link to="/tags/情人節大餐">
                台北最適合約會的餐廳 (♡˙︶˙♡)
              </Link>
            </li>
            <li>
              <Link to="/tags/瘦身">
                怎麼吃才會瘦？秘訣在這裡
              </Link>
            </li>
            <li>
              <Link to="/tags/親子餐廳">
                寵物小孩一起大口吃！
              </Link>
            </li>
            <li>
              <Link to="/tags/不限時">
                最適合工作的咖啡廳清單
              </Link>
            </li>
          </ul>
          <ul className="unordered-list-circle">
            <li>
              <Link to="/tags/寶可夢">
                寶可夢補給站！休息，充電和 Wifi
              </Link>
            </li>
            <li>
              <Link to="/tags/會議室">
                想找個地方開會？會議室出租
              </Link>
            </li>
            <li>
              <Link to="/tags/會員卡">
                超值會員卡大集合，辦了絕對不後悔
              </Link>
            </li>
            <li>
              <Link to="/tags/漫畫">
                無限漫畫看到飽
              </Link>
            </li>
            <li>
              <Link to="/tags/足球">
                一起看足球賽，超大電視螢幕、啤酒
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div styleName="footer__column">
        <h2 styleName="footer__heading">
          關於「吃什麼，どっち」
        </h2>
        <ul className="unordered-list-circle">
          <li>
            <a
              title="什麼是「吃什麼，どっち」？"
              href="https://cythilya.github.io/2015/02/02/dotchi/"
              target="_blank"
              rel="noopener noreferrer"
              >
                什麼是「吃什麼，どっち」？
            </a>
          </li>
          <li>
            <a
              title="聯絡我們"
              href="https://cythilya.github.io/2015/02/02/dotchi/#disqus_thread"
              target="_blank"
              rel="noopener noreferrer"
              >
              聯絡我們
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
