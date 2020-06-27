from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl

context = ssl._create_unverified_context()
url = 'https://www.ygfamily.com/index.asp?LANGDIV=K'
data = urlopen(url,context=context)

html = BeautifulSoup(data,'html.parser')

print(html)