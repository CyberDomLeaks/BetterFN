@echo off
cls
color 3
echo What version will you be using?
echo Notice: Latest is not supported!
echo 1. 15.50
echo 2. Older
set /p x=Pick: 
IF '%x%' == '%x%' GOTO Item_%x%


:Item_1
cd Launcher3
start RiftLauncher.exe
exit

:Item_2
cd Launcher
start RiftLauncher.exe
exit
