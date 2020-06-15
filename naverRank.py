from openpyxl import load_workbook

from urllib.request import urlopen

from urllib.parse import quote_plus

from bs4 import BeautifulSoup

 

wb = load_workbook('test.xlsx')

data = wb.active

 

keyword = []

 

for row in data.rows:

    keyword.append(row[0].value)

 

del(keyword[0])

 

for key in keyword:

    encode = quote_plus(key)

    url = "https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query="+encode

    html = urlopen(url)

    bsObject = BeautifulSoup(html, "html.parser")

    title = bsObject.select_one('#ct > section.sc.sp_ntotal.sp_ntotal2._au_kin_video_collection._prs_kin > div.api_subject_bx > div > h2') # 지식인 타이틀 존재여부 확인.

 

    if title == None:

        print(key+' : 지식인 탭내용이 없음.')

        continue

    else:

        print(key+' 에 대한 검색 결과 :')

        incard = bsObject.select('#ct > section.sc.sp_ntotal.sp_ntotal2._au_kin_video_collection._prs_kin > div.api_subject_bx > ul > li') #지식인 목록 리스트 에 담기 

        print('-'*20)

        for obj in incard:

            subject = obj.select_one('div.kin_wrap > div.question_area > div.question_group > a') # 지식인 제목 내용 가져오기

            name = obj.select_one('div.kin_wrap > div.answer_area > div.profile_group > a.profile_link > div > div > span.name') #지식인 작성자 가져오기

            print(subject.text)

            print(name.text)

        print('-'*20)



