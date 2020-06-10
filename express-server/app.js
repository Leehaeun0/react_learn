const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // 해킹방지

class AppServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;

    //동시성 처리를 위한 준비 코드인데, 후반부에 설명이 들어갑니다.
    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stop = false;
  }
  start() {
    this.app.use(helmet());
    this.app.use(bodyParser());
    this.app.use(cookieParser());
    this.app.use((req, res, next) => {
      console.log('미들웨어');
      next();
    });
    // state, dispatch, next 같은 느낌
    // user -> req -> server
    //      <- res <-
    return this;
  }
}

const init = (config = {}) => {
  const server = new AppServer();
  // appserver를 그냥 호출했을 수도 있지만 한번더 감쌌다. 이 위치에서 다른일 할수있도록
  return server.start();
};

exports.createServer = createServer;
