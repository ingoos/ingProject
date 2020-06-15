from openpyxl import Workbook

wb = Workbook()
data = wb.active

data['A1'] = 'test'
data['B1'] = 'ingoo'

wb.save('test3.xlsx')