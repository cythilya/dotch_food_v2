import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';
import '../../style/components/footer.css';
import data from '../data/data';

const { categories } = data;

const Footer = () => {
  return (
    <div
      className="app-container"
      styleName="footer"
    >
      <div styleName="footer__column footer__column-2x">
        <h2 styleName="footer__heading">
          分類
        </h2>
        <div className="tag-list">
          {
            _.map(categories, (item) => {
              return (
                <div
                  key={item.id}
                  className="tag-list__item"
                >
                  <Link
                    to={`/tags/${item.tag}`}
                    title={item.title}
                    className="tag-list__item__link"
                  >
                    <i
                      title={item.title}
                      className={`tag-list__item__icon icon-${item.className}`}
                    />
                    {/* <Icon
                      name={item.className}
                      title={item.title}
                      size={50}
                      fill=""
                    /> */}
                    <span
                      className="tag-list__item__title"
                    >
                      {item.title}
                    </span>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
      <div styleName="footer__column">
        <h2 styleName="footer__heading">
          熱門討論
        </h2>
        <div
          className="align-row"
          styleName="footer__hot-topic"
        >
          <ul className="unordered-list-circle">
            <li>
              <Link to="/tags/一個人" title="一個人要吃什麼好？">
                一個人要吃什麼好？
              </Link>
            </li>
            <li>
              <Link to="/tags/情人節大餐" title="台北最適合約會的餐廳">
                台北最適合約會的餐廳 (♡˙︶˙♡)
              </Link>
            </li>
            <li>
              <Link to="/tags/瘦身" title="怎麼吃才會瘦？秘訣在這裡">
                怎麼吃才會瘦？秘訣在這裡
              </Link>
            </li>
            <li>
              <Link to="/tags/親子餐廳" title="寵物小孩一起大口吃！">
                寵物小孩一起大口吃！
              </Link>
            </li>
            <li>
              <Link to="/tags/不限時" title="不限時！和朋友歡聚暢聊不設限">
                不限時！和朋友歡聚暢聊不設限
              </Link>
            </li>
            <li>
              <Link to="/tags/工作" title="最適合工作的咖啡廳清單">
                最適合工作的咖啡廳清單
              </Link>
            </li>
            <li>
              <Link to="/tags/寶可夢" title="寶可夢補給站！休息，充電和 Wifi">
                寶可夢補給站！休息，充電和 Wifi
              </Link>
            </li>
            <li>
              <Link to="/tags/會議室" title="想找個地方開會？會議室出租">
                想找個地方開會？會議室出租
              </Link>
            </li>
            <li>
              <Link to="/tags/會員卡" title="超值會員卡大集合，辦了絕對不後悔">
                超值會員卡大集合，辦了絕對不後悔
              </Link>
            </li>
            <li>
              <Link to="/tags/漫畫" title="無限漫畫看到飽">
                無限漫畫看到飽
              </Link>
            </li>
            <li>
              <Link to="/tags/足球" title="一起看足球賽，超大電視螢幕、啤酒">
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
