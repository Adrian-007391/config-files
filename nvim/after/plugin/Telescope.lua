require('telescope').setup{
  defaults = {
    mappings = {
      i = {
        ["<C-h>"] = "which_key"
      }
    }
  },
  pickers = {
	  find_files={
		  initial_mode = "insert"
	  }
	  
  },
  extensions = {
  }
}
vim.api.nvim_set_keymap("n","<leader>ff","<Cmd>Telescope find_files<CR>", {silent= false, noremap = false})


