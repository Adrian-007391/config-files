require('telescope').setup{
  defaults = {
    mappings = {
      i = {
        ["<C-h>"] = "which_key"
      },
	  n = {
		  ["<C-n>"] = "move_selection_next",
		  ["<C-p>"] = "move_selection_previous",
	  }
}
  },
  pickers = {
	  find_files={
		  initial_mode = "insert",
	  },
	  buffers = {
		  initial_mode = "normal",
		  theme = "dropdown",
		  mappings  = {
		  }
	  },
	  
  },
  extensions = {
  }
}
vim.api.nvim_set_keymap("n","<leader>ff","<Cmd>Telescope find_files<CR>", {silent= false, noremap = false})
vim.api.nvim_set_keymap("n","<leader>bb","<Cmd>Telescope buffers<CR>", {silent= false, noremap = false})
