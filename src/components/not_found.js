import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Header as HeaderSemanticUI,
  Icon,
  Message,
  Card,
  Image,
  Label,
} from 'semantic-ui-react';

const Notfound = ({ tags }) => {
  return (
    <div>
      <Message icon>
        <Icon name="info circle" />
        <Message.Content>
          <Message.Header>
            找不到
          </Message.Header>
          <Link to="/" title="回「吃什麼」首頁">
            回首頁
          </Link>
          或看熱門關鍵字
          <Link to={`/tags/${tags[0]}`}>
            {tags[0]}
          </Link>
          、
          <Link to={`/tags/${tags[1]}`}>
            {tags[1]}
          </Link>
          、
          <Link to={`/tags/${tags[2]}`}>
            {tags[2]}
          </Link>
        </Message.Content>
      </Message>
      <div>
        <HeaderSemanticUI as="h2">
          猜你想吃
        </HeaderSemanticUI>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Image src="http://cythilya.github.io/assets/dotch-food-v2/oka-taro-hours/oka-taro-hours.jpg" />
            <Card.Content>
              <Card.Header>
                岡太郎家日式料理
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  營業時間：11:30-14:00、17:00-21:00
                </span>
              </Card.Meta>
              <Card.Description>
                <p>
                  台北市和平東路二段175巷12號
                </p>
                <p>
                  巷弄中，簡單溫暖的小店，賣推薦的食材，還有簡單的料理。
                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label>
                <Link to={`/tags/${tags[0]}`}>
                  {tags[0]}
                </Link>
              </Label>
            </Card.Content>
          </Card>
          <Card>
            <Image src="http://cythilya.github.io/assets/dotch-food-v2/grab-a-bite/grab-a-bite-1.jpg" />
            <Card.Content>
              <Card.Header>
                Grab a Bite 幸福提食
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  營業時間：8 AM - 6 PM
                </span>
              </Card.Meta>
              <Card.Description>
                <p>
                  台北市通化街140-1號
                </p>
                <p>
                  小小不到九坪的三角窗，我們採半開放式空間，座位不多不少就十個，但卻可以為您帶來意想不到的美好滋味。 我們以天然的食材，給予客人最健康的享受，來迎接每一個早晨。
                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label>
                <Link to={`/tags/${tags[1]}`}>
                  {tags[1]}
                </Link>
              </Label>
            </Card.Content>
          </Card>
          <Card>
            <Image
              src="https://bit.ly/2K9dZyC"
            />
            <Card.Content>
              <Card.Header>
                YAYOI Taiwan (南京松江店)
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  營業時間：11 AM - 10 PM
                </span>
              </Card.Meta>
              <Card.Description>
                <p>
                  台北市中山區南京東路二段97號1樓
                </p>
                <p>
                  「YAYOI」是一家日式定食餐廳。提供營養均衡的「定食」，其中包括日本人的主食\u2015剛出鍋的金芽米飯、味噌湯、主菜和副菜等。「YAYOI」將傳承日本美食，並將其推向世界。
                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label>
                <Link to={`/tags/${tags[0]}`}>
                  {tags[0]}
                </Link>
              </Label>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

Notfound.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Notfound;
