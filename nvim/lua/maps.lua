mf=require("mapfunctions");
-- file browser (netrw)
mf.nnoremap('<leader>fb','<Cmd>Ex<CR>')
-- close nvim
mf.nnoremap('<leader><CR>','<Cmd>wqa<CR>')
-- open terminal normal mode
mf.tnoremap('<C-w>','<C-\\><C-n>')

--resize windows
mf.nnoremap('<leader>a','<Cmd>vertical resize +5<CR>')
mf.nnoremap('<leader>s','<Cmd>vertical resize -5<CR>')
mf.nnoremap('<leader>A','<Cmd>resize +5<CR>')
mf.nnoremap('<leader>S','<Cmd>resize -5<CR>')
mf.nnoremap('<Esc><Esc>','<Cmd>nohlsearch<Cr>')

