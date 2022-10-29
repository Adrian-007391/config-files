-- line numbers
vim.o.number=true
vim.o.relativenumber=true
-- leader key 
vim.g.mapleader=" "
-- colorscheme
vim.api.nvim_command [[colorscheme onedark]]
-- tabs
vim.o.tabstop = 4
vim.o.shiftwidth = 4
vim.o.smarttab = true
-- mouse 
vim.o.mouse =""

-- clipboard 
vim.opt.clipboard = "unnamedplus"
