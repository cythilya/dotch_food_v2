import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Segment  } from 'semantic-ui-react';
import GATracking from '../decorators/ga';

const hintHandler = () => {
  console.log('callback done');
}

const WrappedLink = GATracking(Link, { id: 1 },'中式', '好熱門的連結', hintHandler);

function isTestable(target) {
  target.isTestable = true
  return target
}

@isTestable
class Footer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Segment>
              分類
              <ul>
                <li><WrappedLink to='/' /></li>
                <li>美式</li>
                <li>日式</li>
                <li>韓式</li>
                <li>港式</li>
                <li>泰式</li>
                <li>下午茶、點心、冰品</li>
                <li>素食</li>
                <li>主題特色</li>
                <li>咖啡、茶飲</li>
              </ul>
            </Segment>
           </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              熱門標籤
              <div className='align-row'>
                <ul>
                  <li>日式料理</li>
                  <li>早午餐</li>
                  <li>沙拉</li>
                  <li>燒烤</li>
                  <li>漢堡</li>
                  <li>輕食</li>
                  <li>牛排</li>
                  <li>生魚片</li>
                  <li>關東煮</li>
                  <li>平價</li>
                </ul>
                <ul>
                  <li>日式料理</li>
                  <li>早午餐</li>
                  <li>沙拉</li>
                  <li>燒烤</li>
                  <li>漢堡</li>
                  <li>輕食</li>
                  <li>牛排</li>
                  <li>生魚片</li>
                  <li>關東煮</li>
                  <li>平價</li>
                </ul>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              關於我們
              <ul>
                <li>Hello World!</li>
                <li>Hello World!</li>
                <li>Hello World!</li>
                <li>Hello World!</li>
                <li>Hello World!</li>
              </ul>
            </Segment>
           </Grid.Column>
        </Grid>
      </div>
    )
  }
}

console.log(Footer.isTestable); // true

export default Footer;