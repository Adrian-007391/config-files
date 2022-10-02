local o = vim.opt
local cmd = vim.cmd 
local g = vim.g
local w = vim.wo

-- number 
o.number = true
o.relativenumber = true


--colorscheme
cmd("colorscheme catppuccin")


-- set leader key

g.mapleader =' '

-- Search
o.path="**"
o.ignorecase = true
o.smartcase= true

-- tabs 
o.tabstop=2
o.softtabstop=2
o.shiftwidth=2
o.expandtab=true

-- set number
o.number = true
o.rnu = true

-- set Clipboard 
o.clipboard = "unnamedplus"

-- set cursor 
w.cursorline= true
o.scrolloff=8


