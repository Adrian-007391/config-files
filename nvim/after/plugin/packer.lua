-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
	-- Packer can manage itself
	use 'wbthomason/packer.nvim'

	--themes

	-- github theme
	-- use({ 'projekt0n/github-nvim-theme' })
	-- nord theme
	--	use 'shaunsingh/nord.nvim'

	-- onedark theme
	--	use 'joshdick/onedark.vim'

	--	gruvbox theme
	--	use { "ellisonleao/gruvbox.nvim" }

	-- catpuccin theme
	use {
		"catppuccin/nvim",
		as = "catppuccin",
		config = function()
			require("catppuccin").setup {
				flavour = "mocha" -- mocha, macchiato, frappe, latte
			}
		end
	}

	-- night owl theme
	--	use 'Julpikar/night-owl.nvim'

	--	Neosolarized
	use 'Tsuzat/NeoSolarized.nvim'

	--plugins

	-- Telescope
	use {
		'nvim-telescope/telescope.nvim', tag = '0.1.0',
		-- or                            , branch = '0.1.x',
		requires = { { 'nvim-lua/plenary.nvim' } }
	}
	use 'neovim/nvim-lspconfig' -- Configurations for Nvim LSP
	--cmp plugins
	use 'hrsh7th/cmp-nvim-lua'
	use 'hrsh7th/cmp-nvim-lsp'
	use 'hrsh7th/cmp-buffer'
	use 'hrsh7th/cmp-path'
	use 'hrsh7th/cmp-cmdline'
	use 'hrsh7th/nvim-cmp'
	-- end of cmp plugins
	use "L3MON4D3/LuaSnip" -- snippets plugin (cmp won't work without this)
	-- autopairs
	use 'kyazdani42/nvim-web-devicons' -- icons
	use {
		'nvim-lualine/lualine.nvim',
		requires = { 'kyazdani42/nvim-web-devicons', opt = true }
	}
	-- using packer.nvim
	use { 'akinsho/bufferline.nvim', tag = "v3.*", requires = 'kyazdani42/nvim-web-devicons' }
	use { 'nvim-treesitter/nvim-treesitter',
		run = ':TSUpdate' }
	use 'christoomey/vim-tmux-navigator'
	use { 'windwp/nvim-autopairs', config = function() require('nvim-autopairs').setup {} end }
	use { 'windwp/nvim-ts-autotag', config = function() require('nvim-ts-autotag').setup {} end }
	use { "nvim-telescope/telescope-file-browser.nvim" }
	use 'p00f/nvim-ts-rainbow'
	use {
		'numToStr/Comment.nvim',
		config = function()
			require('Comment').setup()
		end
	}
end)
