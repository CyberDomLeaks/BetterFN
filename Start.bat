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
exit

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
cd src
cd public
cd files
EasyInstaller.exe
