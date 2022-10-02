local fb_actions = require "telescope".extensions.file_browser.actions
function Nnoremap(shortcut , command)
   vim.api.nvim_set_keymap("n" , shortcut , command, {noremap = true }) 
end
-- This will load fzy_native and have it override the default file sorter
require('telescope').setup{
  defaults = {
    -- ...
  },
  pickers = {
    find_files = {
    },
    buffers= {
    }
  },
  extensions = {
    file_browser={
      mappings={
         ["n"] = {
          -- remap to going to home directory
          ["<C-n>"] = fb_actions.create,
          ["-"] =fb_actions.goto_parent_dir
        }
      }          
    }
  }
      
}
require("telescope").load_extension "file_browser"
Nnoremap("<leader>ff" ,"<cmd>Telescope find_files<cr>" )
Nnoremap("<leader>hh" ,"<cmd>Telescope colorscheme<cr> " )
Nnoremap("<leader>bb" ,"<cmd>Telescope buffers<cr> " )
Nnoremap("<leader>fb" , "<cmd>Telescope file_browser<cr> <Esc>")

vim.api.nvim_create_autocmd("VimEnter",{command="Telescope find_files"})


