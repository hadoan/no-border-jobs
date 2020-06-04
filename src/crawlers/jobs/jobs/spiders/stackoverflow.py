# -*- coding: utf-8 -*-
import scrapy
import logging
from .base_spider import BaseSpider


class StackoverflowSpider(BaseSpider):
    name = 'stackoverflow'
    allowed_domains = ['stackoverflow.com']
    start_urls = ['https://stackoverflow.com/jobs?id=395682&v=true']

    def parse(self, response):
        listResults = response.xpath('//div[@class="listResults"]')

        

        companyLogoUrls = listResults.xpath("//div[@class='grid']/img/@src")
        for logo in companyLogoUrls:
            logoUrl = logo.get()
            logging.info(logoUrl)

        jobs = listResults.xpath("//div[@class='grid']/div/h2/a")
        for job in jobs:
            jobDetailUrl = job.xpath('@href').get()
            logging.info(jobDetailUrl)
            jobTitle = job.xpath('text()').get()
            logging.info(jobTitle)

        jobLocations = listResults.xpath("//div[@class='grid']/div/h3/span")
        for jobLocation in jobLocations:
            logging.info('hello' + str(jobLocation.xpath('text()').get()))

        