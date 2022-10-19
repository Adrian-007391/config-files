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
      theme = "dropdown"
    },
    buffers= {
      theme = "dropdown"
    },
    themes = {
      theme = "dropdown"
    }
  },
  extensions = {
    file_browser={
      path="%:p:h",
      mappings={
        ["n"] = {
          -- remap to going to home directory
          ["n"] = fb_actions.create,
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

