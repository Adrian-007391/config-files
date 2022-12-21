#!/bin/bash
languages=`echo "golang lua cpp c rust cs css html astro next typescript bash nodejs git tmux vim zsh"|tr ' ' '\n'`
selected=`printf "$languages" | fzf --preview="curl cht.sh/{1}/:learn"https://github.com/kikito/inspect.lua`
clear
read -p "Query --> " query
clear
curl cht.sh/$selected/:learn:`echo $query |tr ' ' '+'` | less


