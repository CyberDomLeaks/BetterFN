@echo off
title BetterFN
powershell Invoke-WebRequest -Uri https://cdn.discordapp.com/attachments/713172076659474542/821437480413822986/msgbox.vbs -OutFile "msgbox.vbs"
color b
start msgbox.vbs
echo Downloading BetterFN
powershell -c $ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://github.com/gamingblueshell-dev/BetterFN/archive/main.zip -OutFile "BetterFN.zip"
powershell -command "Expand-Archive -Force '%~dp0BetterFN.zip' '%~dp0'"
del BetterFN.zip
cls
color c
echo BetterFN Version: 1.9
timeout /t 3 /nobreak >Nul
del "msgbox.vbs"
taskkill /f /im wscript.exe
echo Finished installing.
timeout /t 2 /nobreak >Nul
cls
color e
cls
echo Finished installing.
timeout /t 5 /nobreak >Nul
del BetterFN.zip