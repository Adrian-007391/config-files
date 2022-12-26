#!/bin/bash
languages=`echo "golang lua cpp c rust cs css html astro next typescript bash nodejs git tmux vim zsh q"|tr ' ' '\n'`
selected=`printf "$languages" | fzf --preview="curl cht.sh/{1}/:learn"`
clear
if [[ $selected != "q" ]]; then
    read -p "Query --> " query
    clear
    curl cht.sh/$selected/:learn:`echo $query |tr ' ' '+'` | less
fi


