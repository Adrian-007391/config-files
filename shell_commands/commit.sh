#!/bin/bash
files=`git status |grep modified`
selected=`printf "$files" | sed 's/modified://' |fzf --preview="git diff --color=always {1}"`
git add $selected
read -p "added $selected , what is your commit? " commit
git commit -m "$commit"
echo commited $selected with commit message $commit
