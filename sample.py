from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl

context = ssl._create_unverified_context()

url = 'http://naver.com'
data = urlopen(url,context=context)
html = BeautifulSoup(data,'html.parser')

nav_list = html.select('#NM_FAVORITE > div.group_nav > ul.list_nav.type_fix > li')

for item in nav_list:
    print(item.text)