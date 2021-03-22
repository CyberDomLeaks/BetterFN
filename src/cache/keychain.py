import requests
import os
import json
import time

print('NOTE: Only the current version is specified atm.')
print('What version are you going to be on? \n1. latest\n2. Galactus\n3. Travis Scott Event\n4. The Device Event\n')
ask = input('>> ')

if ask == '1':
    print('Loaded latest versions keychain.')
elif ask == '2':
    print('Loaded Galactus (14.60)')
    galactus = '1'
elif ask == '3':
    print('Loaded Travis Event')
elif ask == '4':
    print('Loaded The Device Event')
else:
    print('Unspecified number. (Enter a number between 1-1)')
    time.sleep(2)
    exit()

print('\nGrabbing keychain...')

if ask == '1':
    response = requests.get('https://api.nitestats.com/v1/epic/keychain')
elif ask == '2':
    response = requests.get('https://pastebin.com/raw/nimMBCVe')
    print('Grabbed Galactus Event Keychain.')
elif ask == '3':
    response = requests.get('https://pastebin.com/raw/HxvWaeiZ')
    print('Grabbed Travis Scott keychain!')
elif ask == '4':
    response = requests.get('https://pastebin.com/raw/hvrnyFzJ')
    print('Grabbed The Device Keychain.')
else:
    response = requests.get('https://api.nitestats.com/v1/epic/keychain')

x = response.json()

json_object = json.dumps(x, indent = 4)

with open('keychain.json', 'w') as f:
    json.dump(x, f, indent=4)

time.sleep(1)
print('\nDone!')
time.sleep(4)