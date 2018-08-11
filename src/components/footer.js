import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={6}>
          <Segment>
            分類
            <div className="align-row">
              <ul>
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
              <ul>
                <li>
                  <Link to="/tags/下午茶、點心、冰品">
                    下午茶、點心、冰品
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
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            熱門主題
            <div className="align-row">
              <ul>
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
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            關於「吃什麼，どっち」
            <ul>
              <li>
                <Link to="https://cythilya.github.io/2015/02/02/dotchi/">
                  什麼是「吃什麼，どっち」？
                </Link>
              </li>
              <li>
                <Link to="https://cythilya.github.io/2015/02/02/dotchi/#disqus_thread">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Footer;
