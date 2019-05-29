import requests
from bs4 import BeautifulSoup

url = "http://quotes.toscrape.com/"

r = requests.get(url)
r_html=r.text
soup = BeautifulSoup(r_html,'lxml')
#print(soup.prettify())

for quote_text in soup.find_all('span', class_ ='text'):
    quote = quote_text.text
    print(quote)
    print()
for author_text in soup.find_all('small', class_='author'):
    author = author_text.text
    print(author)
       

