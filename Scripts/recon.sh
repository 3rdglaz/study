#! /bin/zsh

if [ -z "$1" ]
then
	echo "Usage: ./recon.sh <IP>"
	exit 1
fi

printf	"\n ---- NMAP ----\n\n" > result

echo "Running Nmap..."
nmap $1 | tail -n +5 | head -n -3 >> result

while read line
do
	if [[ $line == *open* ]] && [[ $line == *http* ]]
	then
		echo "Running WhatWeb..."
		whatweb $1 -v > temp
	fi
done < result

if [ -e temp ]
then
	printf"\n ---- WEB ----\n\n" >> result
	cat temp >> result
	rm temp
fi
cat result
