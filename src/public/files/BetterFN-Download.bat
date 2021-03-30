@echo off
cd %appdata%
title BetterFN
powershell Invoke-WebRequest -Uri https://cdn.discordapp.com/attachments/713172076659474542/821437480413822986/msgbox.vbs -OutFile "msgbox.vbs"
color b
start msgbox.vbs
echo Downloading BetterFN
powershell -c $ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://github.com/CyberDomLeaks/BetterFN/archive/main.zip -OutFile "BetterFN.zip"
powershell -command "Expand-Archive -Force 'BetterFN.zip' 'BetterFN'"
del BetterFN.zip
set SCRIPT="%TEMP%\%RANDOM%-%RANDOM%-%RANDOM%-%RANDOM%.vbs"

echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT%
echo sLinkFile = "%USERPROFILE%\Desktop\BetterFN.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "%appdata%\BetterFN\BetterFN-main\Start.bat" >> %SCRIPT%
echo oLink.IconLocation = "%appdata%\BetterFN\BetterFN-main\src\public\files\favicon.ico" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%

cscript %SCRIPT%
del %SCRIPT%
cls
color c
echo BetterFN
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
del %~f0