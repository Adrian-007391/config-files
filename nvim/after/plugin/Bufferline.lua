vim.opt.termguicolors = true
require("bufferline").setup{
	options = {
		separator_style = 'slant',
	}	
}
vim.api.nvim_set_keymap('n' , '<Tab>' ,'<Cmd>BufferLineCycleNext<CR>',{noremap=true})
vim.api.nvim_set_keymap('n' , '<S-Tab>' ,'<Cmd>BufferLineCyclePrev<CR>',{noremap=true})
vim.api.nvim_set_keymap('n' , '<C-w><C-w>' ,'<Cmd>bdelete<CR>',{noremap=true})
