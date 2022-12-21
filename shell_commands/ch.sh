#!/bin/bash
languages=`echo "golang lua cpp c rust cs css html astro next typescript bash nodejs git"|tr ' ' '\n'`
selected=`printf "$languages" | fzf`
clear
read -p "Query --> " query
clear
curl cht.sh/$selected/:learn:`echo $query |tr ' ' '+'` | less


