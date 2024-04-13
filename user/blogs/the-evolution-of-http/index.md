---
title: The Evolution of HTTP
description: 
summary: 🌐 From HTTP/0.9 to HTTP/3.0
published: '2024-03-14T10:36:29.000+01:00'
updated: '2024-03-14T10:36:29.000+01:00'
cover: ./cover.jpg
coverStyle: 'IN'
tags:
  - [ HTTP ]
---

## Introduction
The World Wide Web has undergone remarkable transformations since its inception, with the evolution of Hypertext Transfer Protocol (HTTP) playing a pivotal role in shaping its trajectory.
From its humble beginnings to the sophisticated standards we have today, HTTP has continuously adapted to accommodate the changing landscape of the internet.
In this blog post, we delve into the journey of HTTP, exploring its evolution and the impact it has had on the way we interact with the web.

## HTTP/0.9
HTTP was conceived in the early 1990s by Tim [Berners-Lee](https://www.w3.org/People/Berners-Lee/), a computer scientist at CERN, as a means to facilitate the exchange of information between servers and clients.
The first version, HTTP/0.9, was a simple protocol designed primarily for retrieving static web pages. It lacked features such as headers and status codes, reflecting the nascent nature of the web at the time.

## HTTP/1.0
With the explosive growth of the web in the mid-1990s, the need for a more robust and extensible protocol became evident.
HTTP/1.0 introduced several key features, including support for request headers, status codes, and content negotiation. 
hese enhancements paved the way for more dynamic and interactive web experiences, enabling the development of early web applications.

## HTTP/1.1
As the complexity of web applications increased, HTTP/1.0 revealed its limitations.
Issues such as inefficient resource utilization and latency prompted the development of HTTP/1.1 in 1997.
This version introduced persistent connections, pipelining, and host-header-based virtual hosting, significantly improving performance and scalability.
HTTP/1.1 became the de facto standard for web communication for over a decade, laying the foundation for the modern web.

## HTTP/2
By the early 2010s, the demands placed on web servers had outgrown the capabilities of HTTP/1.1.
The emergence of rich media, dynamic content, and mobile devices necessitated a more efficient protocol.
In 2015, HTTP/2 was standardized, bringing with it revolutionary features such as multiplexing, header compression, and server push.
These advancements drastically reduced latency and improved page load times, ushering in a new era of web performance.

## HTTP/3
HTTP/3 was born from a new transport protocol, QUIC, created by Google in 2012.
To solve TCP's head-of-line blocking, QUIC decided to use UDP for its transport protocol, because UDP does not care for guarantees of arrival.
The responsibility of data integrity, that in TCP is part of the transport layer, is moved in QUIC to the application layer, and the frames of a message can arrive out of order, without blocking unrelated streams.

## Further Reading
If you want to read more about HTTP I suggest these articles:

* [HTTP/2 and HTTP/3 explained](https://alexandrehtrb.github.io/posts/2024/03/http2-and-http3-explained/)
* [Evolution of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
* [QUIC - Wikipedia](https://en.wikipedia.org/wiki/QUIC)
* [Introducing Zero Round Trip Time Resumption (0-RTT)](https://blog.cloudflare.com/introducing-0-rtt)
