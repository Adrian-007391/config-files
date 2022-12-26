vim.g.mapleader = " "

-- move selected lines up and down
vim.keymap.set("v", "K", ":m '<-2<CR>gv=gv")
vim.keymap.set("v", "J", ":m '>+1<CR>gv=gv")


-- get file tree
vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)

-- quit nvim
vim.keymap.set("n", "<leader><Enter>", vim.cmd.wqa)

-- double escape to remove highlights from search
vim.keymap.set("n", "<Esc><Esc>", vim.cmd.nohl)

-- search and replace
vim.keymap.set("v", "<C-s>", ":s/")

-- <C-d> and <C-u> to center cursor
vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
