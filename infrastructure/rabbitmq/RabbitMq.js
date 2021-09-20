const rabbit = require('amqplib');
const credentials = require('../../configuration/rabbitMq');

class RabbitMq {

  constructor() {
    this.RMQ_CONFIG = credentials.getCredentials(process.env.NODE_ENV);
  }

  async publish(message, options) {
    
    applog.log.info({RABBIT_MQ_PUBLISH_STATUS:"RABBIT_MQ_PUBLISH_STARTED",MESSAGE:message});
    const connection = rabbit.connect(this.RMQ_CONFIG.host)

    return connection.then(async (conn) => {
      const channel = await conn.createChannel();
      await channel.assertExchange(this.RMQ_CONFIG.exchangename, this.RMQ_CONFIG.exchangetype);
      await channel.assertQueue(this.RMQ_CONFIG.queuename);
      channel.bindQueue(this.RMQ_CONFIG.queuename, this.RMQ_CONFIG.exchangename, this.RMQ_CONFIG.key);

      channel.sendToQueue(this.RMQ_CONFIG.queuename, message, options)

      applog.log.info({RABBIT_MQ_PUBLISH_STATUS:"RABBIT_MQ_PUBLISH_FINISH"});
    });

  }
}

const rabbitMq = new RabbitMq();
module.exports = rabbitMq