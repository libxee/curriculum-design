'use strict';
const Controller = require('egg').Controller;

class TopicController extends Controller {
  async index() {
    // 获取topics
  }
  async create() {
    // 创建topic
  }
  async show() {
    // 获取特定id topic topic/:id
  }
  async destroyed() {
    //  删除topic
  }
}
module.exports = TopicController;
