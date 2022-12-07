import pyautogui
import pyperclip
import time
import win32com.client as comclt

wsh= comclt.Dispatch("WScript.Shell")

pyautogui.moveTo(60, 50)
pyautogui.click(60,50)

pyautogui.moveTo(80, 280)
time.sleep(0.5)
pyautogui.moveTo(600, 300)
pyautogui.click(600, 300)
time.sleep(10)
pyautogui.moveTo(25, 380)
pyautogui.click(25, 380)

pyperclip.copy("C:/Users/Matias Ledesma/personal/Chandon/svg")
pyautogui.moveTo(450, 100)
pyautogui.click(450, 100)
wsh.SendKeys("^v")
wsh.SendKeys("{ENTER}")
time.sleep(2)
pyautogui.moveTo(400, 270)  
pyautogui.click(400, 270)  
wsh.SendKeys("{ENTER}")