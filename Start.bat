@echo off
cd %appdata%\BetterFN\BetterFN-main\
echo Installing everything you need...

call .\src\install.bat
echo Finished installing everything! Now running program
timeout /t 2 /nobreak >Nul
taskkill /f /im epicgameslauncher.exe
cls
echo Closing Epic Launcher!
timeout /t 2 /nobreak >Nul
taskkill /f /im epicgameslauncher.exe
cls
echo Closed Epic Games Launcher!
timeout /t 2 /nobreak >Nul
cls
TITLE Select option
:start
color 3
echo.
echo 1. Install modules
echo 2. Start server
echo.3. Select keychain (select what version you'll be on)
echo 4. Website
echo 5. Sign Up
echo 6. Owners Credits, socials
echo 7. Open Launcher
echo 8. Open EasyInstaller
echo 9. Open Config
echo 10. Custom paks
echo Support a Creator Code: CEPTNITE10
echo.
set /p x=Pick: 
IF '%x%' == '%x%' GOTO Item_%x%


:Item_1
TITLE installing
start src\Install.bat
GOTO Start

:Item_2
cls
TITLE Server running
cd src
run.bat
echo Woops! Something wrong happened
echo If it says you are missing modules please download them
echo Create a ticket if you need help
pause >Nul

:Item_3
cd src
cd cache
Keychain.bat

:Item_4
SET BROWSER=msedge.exe
SET WAIT_TIME=2
START %BROWSER% -new-tab "http://localhost"

:Item_5
SET BROWSER=msedge.exe
START %BROWSER% -new-tab "http://localhost/signup"

:Item_6
SET BROWSER=msedge.exe
START %BROWSER% -new-tab "http://localhost/fevers"
START %BROWSER% -new-tab "http://localhost/gamingblueshell"
START %BROWSER% -new-tab "http://localhost/discord"

:Item_7
cd src
cd public
cd files
Version.bat

:Item_8
echo Note:
echo custom textures/meshes work on 14.30.
echo Made by kyiro.
timeout 5 /nobreak >Nul
echo Press any button to continue.
pause >Nul
cls
title EasyInstaller - BetterFN
cd src
cd public
cd files
EasyInstaller.exe


:Item_9
cd src
Config.json


:Item_10
cls
echo Would you like to select path or enter swapper?
echo 1. Swapper
echo 2. Path
set /p what=Pick: 
IF '%what%' == '1' GOTO paks
IF '%what%' == '2' GOTO path



:path
cls
rem Saved in %appdata%\BetterFN\BetterFN-Main\
echo Please select your 14.30 paks folder (not normal fortnite or your fortnite will break)
set /p pakpath=path: 
echo %pakpath%> Config.txt
cd /d "%pakpath%"
cls
exit






:paks
cd /d %appdata%\BetterFN\BetterFN-Main
setlocal enabledelayedexpansion
set INPUT_FILE="Config.txt"

:: # Count the number of lines in the text file and generate a random number
set lines=2
for /f "usebackq" %%a in (%INPUT_FILE%) do set /a lines+=1
echo %RANDOM% >nul
set /a randnum=%RANDOM% * !lines! / 32768 + 2

:: # Extract the line from the file
set lines=0
for /f "usebackq tokens=*" %%a in (%INPUT_FILE%) do (
    set /a lines+=2
    if !lines!==2 set randline=%%a
)
cd /d !randline!
cls
echo.
cd
echo.
echo If the path is wrong
echo contact us on Discord we'll try to help!
echo Or you could try waiting a little while before, that may help. ORRR you could try redoing the path.
echo.
echo Welcome to custom paks where you can select anything from custom sounds/meshes/textures.
timeout 2 /nobreak >Nul
echo Press any key to continue.
pause >Nul
goto Custom_Paks
cls



:no
exit


:Yes
TASKKILL /F /IM FortniteClient-Win64-Shipping.exe
cls
goto Custom_Paks














:Custom_Paks
cls
echo Some of these I got from the Modding Community discord server. type discord to join their discord.
timeout 2 /nobreak >Nul
echo All of these were made public and if you'd like me to take it off, you can just tell me and I will make it non-usable.
echo.
echo Custom paks you can choose from:
echo.
echo.
echo 1. Zylox Custom Pak Bundle
echo.
echo 2. Butter Barn Emote (Swaps for Island Vibes)
echo ---------------------------
echo.
echo 18+ type 18+ to continue.
echo.
echo ---------------------------
set /p pick=Pick: 
IF '%pick%' == '1' GOTO zylox
IF '%pick%' == '2' GOTO barn
IF '%pick%' == '18+' GOTO 18
IF '%pick%' == 'discord' GOTO mod_discord



:mod_discord
start https://discord.gg/CB53H8JF9J
exit



:zylox
echo Made by Zylox
echo Found in Modding Community discord server.
echo.
echo.
cls
echo 1. Convert
echo 2. Revert
set /p pick2=Pick: 
IF '%pick2%' == '1' GOTO ZyloxConvert
IF '%pick2%' == '2' GOTO ZyloxRevert


:ZyloxConvert
timeout 3 /nobreak >Nul
cls
echo %date% %time%
echo Downloading sig
echo Progress:
powershell Invoke-WebRequest -Uri https://cdn.discordapp.com/attachments/713172076659474542/829809540257284216/pakchunk56-WindowsClient.sig -OutFile "pakchunk56-WindowsClient.sig"

cls
echo %date% %time%
echo Downloading Pak
echo Progress:
powershell Invoke-WebRequest -Uri https://download1334.mediafire.com/qaod4g2aa0rg/oxe68wmei7eqe5b/pakchunk56-WindowsClient.pak -OutFile "pakchunk56-WindowsClient.pak"
cls
cls
timeout 2 /nobreak >Nul
start %appdata%\BetterFN\BetterFN-main\src\public\files\converted.vbs
exit



:ZyloxRevert
cls
del pakchunk56-WindowsClient.pak
del pakchunk56-WindowsClient.sig
cls
timeout 2 /nobreak >Nul
start %appdata%\BetterFN\BetterFN-main\src\public\files\reverted.vbs
exit




:18
set /p nsfw=18+ nsfw items, are you sure you want to continue?    
IF '%nsfw%' == 'Yes' GOTO nsfwYes
IF '%nsfw%' == 'No' GOTO nsfwNo
IF '%nsfw%' == 'yes' GOTO nsfwYes
IF '%nsfw%' == 'no' GOTO nsfwNo
pause >Nul


:nsfwNo
echo okay, sending back to paks
gimme 4 seconds
timeout 1 /nobreak >Nul
cls
echo okay, sending back to paks
gimme 3 seconds
timeout 1 /nobreak >Nul
cls
echo okay, sending back to paks
gimme 2 seconds
timeout 1 /nobreak >Nul
cls
echo okay, sending back to paks
gimme 1 second
timeout 1 /nobreak >Nul
cls
goto paks


:nsfwYes
cls
echo Are you even 18+?
timeout 1 /nobreak >Nul
echo nevermind...
echo.
echo.
echo.
echo 1. Moaning noises (for fright funk)
echo.
set /p pick50=Pick: 
IF '%pick50%' == '1' GOTO moan

:moan
cls
echo Made by CNDR
echo Found in Modding Community discord server.
echo.
echo.
echo 1. Convert
echo 2. Revert
set /p pick51=Pick: 
IF '%pick51%' == '1' GOTO moanConvert
IF '%pick51%' == '2' GOTO moanRevert


:moanConvert
cls
timeout 3 /nobreak >Nul
cls
echo %date% %time%
echo Downloading sig
echo Progress:
powershell Invoke-WebRequest -Uri https://cdn.discordapp.com/attachments/713172076659474542/829809540257284216/pakchunk56-WindowsClient.sig -OutFile "pakchunk69-WindowsClient.sig"

cls
echo %date% %time%
echo Downloading Pak
echo Progress:
powershell Invoke-WebRequest -Uri https://cdn.discordapp.com/attachments/713172076659474542/829825750285811742/pakchunk69-WindowsClient.pak -OutFile "pakchunk69-WindowsClient.pak"
cls
cls
timeout 2 /nobreak >Nul
start %appdata%\BetterFN\BetterFN-main\src\public\files\converted.vbs
exit




:moanRevert
cls
del pakchunk69-WindowsClient.pak
del pakchunk69-WindowsClient.sig
cls
timeout 2 /nobreak >Nul
start %appdata%\BetterFN\BetterFN-main\src\public\files\reverted.vbs
exit







:barn
cls
echo Made by Tilted.
echo.
echo.
echo.
echo 1. Convert
echo 2. Revert
set /p pick60=Pick: 
IF '%pick60%' == '1' GOTO barnConvert
IF '%pick60%' == '2' GOTO barnRevert




:barnConvert
cls
echo %date% %time%
echo Downloading sig
echo Progress:
powershell Invoke-WebRequest -Uri https://cdn.discordapp.com/attachments/713172076659474542/829809540257284216/pakchunk56-WindowsClient.sig -OutFile "pakchunk80-WindowsClient.sig"

cls
echo %date% %time%
echo Downloading Pak
echo Progress:
powershell Invoke-WebRequest -Uri https://cdn.discordapp.com/attachments/713172076659474542/829853437398220900/pakchunk80-WindowsClient.pak -OutFile "pakchunk80-WindowsClient.pak"
cls
cls
timeout 2 /nobreak >Nul
start %appdata%\BetterFN\BetterFN-main\src\public\files\converted.vbs
exit
