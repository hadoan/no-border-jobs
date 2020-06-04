import scrapy
import logging
from datetime import date, datetime
import sys
import pika #rabbitmq

from ..models.job_data import JobData

logfile = "logs/log"+date.today().strftime("%Y%m%d")+'.txt'
logging.basicConfig(filename=logfile, level=logging.DEBUG)
logging.getLogger().addHandler(logging.StreamHandler(sys.stdout))

class BaseSpider(scrapy.Spider):
    def sendToDistributedEventBus(self, jobData):
        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        channel = connection.channel()
        # channel.queue_declare(queue='hello')
        channel.basic_publish(exchange='distributed_event_bus',routing_key='hello',body='Hello World!')
        print(" [x] Sent 'Hello World!'")

