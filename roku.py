#!/usr/bin/python

import sys
import socket
import re

ssdpRequest = "M-SEARCH * HTTP/1.1\r\n" + \
        "HOST: 239.255.255.250:1900\r\n" + \
        "Man: \"ssdp:discover\"\r\n" + \
        "MX: 5\r\n" + \
        "ST: roku:ecp\r\n\r\n";
socket.setdefaulttimeout(10)
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_TTL, 2)
sock.sendto(ssdpRequest, ("239.255.255.250", 1900))
while True:
    try:
        resp = sock.recv(1024)
        print(resp)
        print("Matches")
        matchObj = re.match(r'.*USN: uuid:roku:ecp:([\w\d]{12}).*LOCATION: (http://.*/).*', resp, re.S)
        #print (matchObj.group(1) + " " + matchObj.group(2))
    except socket.timeout:
        break


#10.0.0.8:8060