local fb_actions = require "telescope".extensions.file_browser.actions
require('telescope').setup {
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
		find_files = {
			initial_mode = "insert",
		},
		buffers = {
			initial_mode = "normal",
			theme        = "dropdown",
			mappings     = {
			}
		},

	},
	extensions = {
		file_browser = {
			path = "%:p:h",
			initial_mode = "normal",
			-- disables netrw and use telescope-file-browser in its place
			hijack_netrw = true,
			mappings = {
				["i"] = {
					-- your custom insert mode mappings
				},
				["n"] = {
					["%"] = fb_actions.create,
					["-"] = fb_actions.goto_parent_dir,
					["d"] = fb_actions.remove,
					["y"] = fb_actions.copy
					-- your custom normal mode mappings
				},
			},
		},
	}
}
vim.api.nvim_set_keymap("n", "<leader>ff", "<Cmd>Telescope find_files<CR>", { silent = false, noremap = false })
vim.api.nvim_set_keymap("n", "<leader>gg", "<Cmd>Telescope live_grep<CR>", { silent = false, noremap = false })
vim.api.nvim_set_keymap("n", "<leader>fb", "<Cmd>Telescope file_browser<CR>",
	{ silent = false, noremap = false })

require("Telescope").load_extension "file_browser"
