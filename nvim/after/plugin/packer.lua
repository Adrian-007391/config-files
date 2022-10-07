
-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
  use 'neovim/nvim-lspconfig' -- lsp
  --use { "catppuccin/nvim", as = "catppuccin" } -- catppucchin theme 
  use 'overcache/NeoSolarized' --neosolarized theme
  use 'wbthomason/packer.nvim' -- package manager
  use {
    'nvim-telescope/telescope.nvim', tag = '0.1.0',
    requires = { {'nvim-lua/plenary.nvim'} }
  } -- fuzzy finder telescope
  use { "nvim-telescope/telescope-file-browser.nvim" }-- file browser extension for telescope
  use 'kyazdani42/nvim-web-devicons' --icon pack 
  use {
    'nvim-lualine/lualine.nvim',
    requires = { 'kyazdani42/nvim-web-devicons', opt = true }
  }
  use{"sheerun/vim-polyglot"}
  use 'hrsh7th/nvim-cmp' -- Autocompletion plugin
  use 'hrsh7th/cmp-nvim-lsp' -- LSP source for nvim-cmp
  use 'saadparwaiz1/cmp_luasnip' -- Snippets source for nvim-cmp
  use 'L3MON4D3/LuaSnip' -- Snippets plugin
  use {
    "windwp/nvim-autopairs",
  }
end)
