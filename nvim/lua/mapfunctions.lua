options = {noremap = true , silent = true}
local m={}
function m.nnoremap(key , command)
	vim.api.nvim_set_keymap('n', key , command , options)
end 
function m.inoremap(key , command)
	vim.api.nvim_set_keymap('i', key , command , options)
end 

function m.vnoremap(key , command)
	vim.api.nvim_set_keymap('v', key , command , options)
end 

return m

