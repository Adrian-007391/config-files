-- line numbers
vim.o.number = true
vim.o.relativenumber = true
-- leader key
vim.g.mapleader = " "
-- colorscheme
vim.api.nvim_command [[colorscheme catppuccin]]
vim.opt.scrolloff = 16




vim.opt.cursorline = true
-- no swap file
vim.api.nvim_command [[set noswapfile]]

-- tabs
vim.o.tabstop = 2
vim.o.shiftwidth = 2
vim.o.smarttab = true
-- mouse
vim.o.mouse = ""

-- clipboard
vim.opt.clipboard = "unnamedplus"
