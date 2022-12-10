local ok,telescope = pcall(require,"telescope")
if not ok then
    return 
end 

local nnoremap=require("Adrian.keymaps").nnoremap

telescope.setup()
require('telescope').load_extension('fzf')

nnoremap("<leader>ff",function() require("telescope.builtin").find_files() end)

